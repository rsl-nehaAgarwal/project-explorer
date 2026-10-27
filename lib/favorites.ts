"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

const KEY = "favorite-projects";
const EVENT = "favorite-projects-change";

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

const getSnapshot = () => localStorage.getItem(KEY) ?? "[]";
const getServerSnapshot = () => "[]";

export function useFavorites() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const ids = useMemo<string[]>(() => {
    try {
      return JSON.parse(raw) as string[];
    } catch {
      return [];
    }
  }, [raw]);

  const toggle = useCallback(
    (id: string) => {
      const next = ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id];
      localStorage.setItem(KEY, JSON.stringify(next));
      window.dispatchEvent(new Event(EVENT));
    },
    [ids],
  );

  return { ids, isFavorite: (id: string) => ids.includes(id), toggle };
}

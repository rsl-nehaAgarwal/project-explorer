"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { useFavorites } from "@/lib/favorites";

const STATUS_OPTIONS = [
  { value: "", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
  { value: "on-hold", label: "On hold" },
];

export function ProjectFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { ids } = useFavorites();

  const currentStatus = searchParams.get("status") ?? "";
  const [text, setText] = useState(searchParams.get("search") ?? "");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  function hrefFor(name: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(name, value);
    else params.delete(name);
    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  }

  function onSearchChange(value: string) {
    setText(value);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      router.replace(hrefFor("search", value.trim()), { scroll: false });
    }, 300);
  }

  return (
    <div className="mb-6 space-y-3">
      <div className="flex flex-wrap items-center gap-3">
        <input
          type="search"
          value={text}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects, e.g. nextjs"
          aria-label="Search projects"
          className="w-full max-w-sm rounded-md border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
        />
        <Link
          href={pathname}
          onClick={() => setText("")}
          className="text-sm text-indigo-600 hover:underline dark:text-indigo-400"
        >
          Clear filters
        </Link>
        <span className="ml-auto text-sm text-slate-500" suppressHydrationWarning>
          ★ {ids.length} favourite{ids.length === 1 ? "" : "s"}
        </span>
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by status">
        {STATUS_OPTIONS.map((opt) => {
          const active = currentStatus === opt.value;
          return (
            <Link
              key={opt.label}
              href={hrefFor("status", opt.value)}
              replace
              scroll={false}
              aria-current={active ? "true" : undefined}
              className={`rounded-full border px-3 py-1 text-sm ${
                active
                  ? "border-indigo-600 bg-indigo-600 text-white"
                  : "border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              }`}
            >
              {opt.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

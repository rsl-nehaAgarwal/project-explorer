"use client";

import { useFavorites } from "@/lib/favorites";

export function FavoriteButton({ projectId, projectName }: { projectId: string; projectName: string }) {
  const { isFavorite, toggle } = useFavorites();
  const favorite = isFavorite(projectId);

  return (
    <button
      type="button"
      onClick={() => toggle(projectId)}
      aria-pressed={favorite}
      aria-label={favorite ? `Remove ${projectName} from favourites` : `Add ${projectName} to favourites`}
      className={`rounded-md px-2 py-1 text-xl leading-none transition-colors ${
        favorite ? "text-amber-500" : "text-slate-400 hover:text-amber-500"
      }`}
    >
      <span suppressHydrationWarning>{favorite ? "★" : "☆"}</span>
    </button>
  );
}

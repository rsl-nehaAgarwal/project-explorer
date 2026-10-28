"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const TABS = [
  { slug: "", label: "Overview" },
  { slug: "team", label: "Team" },
  { slug: "tasks", label: "Tasks" },
  { slug: "activity", label: "Activity" },
  { slug: "docs", label: "Docs" },
];

export function ProjectTabs({ id }: { id: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Carry the project-list filters along so "Back to projects" restores them.
  const keep = new URLSearchParams();
  for (const key of ["search", "status"]) {
    const value = searchParams.get(key);
    if (value) keep.set(key, value);
  }
  const suffix = keep.toString() ? `?${keep.toString()}` : "";
  const base = `/projects/${id}`;

  return (
    <div>
      <Link href={`/projects${suffix}`} className="text-sm text-indigo-600 hover:underline dark:text-indigo-400">
        &larr; Back to projects
      </Link>
      <nav aria-label="Project sections" className="mt-4 flex flex-wrap gap-1 border-b border-slate-200 dark:border-slate-800">
        {TABS.map((tab) => {
          const href = tab.slug ? `${base}/${tab.slug}` : base;
          const active = tab.slug ? pathname.startsWith(href) : pathname === base;
          return (
            <Link
              key={tab.label}
              href={`${href}${suffix}`}
              aria-current={active ? "page" : undefined}
              className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium ${
                active
                  ? "border-indigo-600 text-indigo-600 dark:text-indigo-400"
                  : "border-transparent text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

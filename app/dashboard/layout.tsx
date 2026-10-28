import { Suspense } from "react";
import Link from "next/link";
import { SidebarNav } from "@/components/SidebarNav";
import { getAllProjects } from "@/lib/projects";

// This layout wraps only the pages under /dashboard.
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const projects = getAllProjects().slice(0, 4);

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <aside className="md:w-56 md:shrink-0" aria-label="Dashboard navigation">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Dashboard</p>
        <Suspense fallback={<div className="h-32" />}>
          <SidebarNav />
        </Suspense>

        <p className="mb-2 mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">Quick links</p>
        <ul className="space-y-1">
          {projects.map((p) => (
            <li key={p.id}>
              <Link href={`/projects/${p.id}`} className="block rounded-md px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <section className="min-w-0 flex-1">{children}</section>
    </div>
  );
}

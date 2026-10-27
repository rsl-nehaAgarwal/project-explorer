import Link from "next/link";
import type { Project } from "@/lib/projects";
import { StatusBadge } from "@/components/StatusBadge";
import { FavoriteButton } from "@/components/FavoriteButton";

export function ProjectCard({ project, query }: { project: Project; query: string }) {
  // Keep the active filters in the link so they survive a visit to the project and back.
  const href = `/projects/${project.id}${query ? `?${query}` : ""}`;

  return (
    <article className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="absolute right-3 top-3">
        <FavoriteButton projectId={project.id} projectName={project.name} />
      </div>
      <h2 className="pr-10 text-lg font-semibold">
        <Link href={href} className="hover:underline">
          {project.name}
        </Link>
      </h2>
      <div className="my-2">
        <StatusBadge status={project.status} />
      </div>
      <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">{project.description}</p>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded bg-slate-100 px-2 py-0.5 text-xs dark:bg-slate-800">
            #{tag}
          </span>
        ))}
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700" aria-label={`${project.progress}% complete`}>
        <div className="h-full bg-indigo-600" style={{ width: `${project.progress}%` }} />
      </div>
    </article>
  );
}

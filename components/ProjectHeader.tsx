import { Suspense } from "react";
import Link from "next/link";
import { getProjectSummary } from "@/lib/projects";
import { ProjectTabs } from "@/components/ProjectTabs";
import { StatusBadge } from "@/components/StatusBadge";
import { Skeleton } from "@/components/Skeletons";

export async function ProjectHeader({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectSummary(id);

  if (!project) {
    return (
      <div className="mb-6">
        <Link href="/projects" className="text-sm text-indigo-600 hover:underline dark:text-indigo-400">
          &larr; Back to projects
        </Link>
        <h1 className="mt-3 text-2xl font-bold">Unknown project</h1>
      </div>
    );
  }

  return (
    <header className="mb-6">
      <Suspense fallback={<Skeleton className="mb-4 h-5 w-32" />}>
        <ProjectTabs id={project.id} />
      </Suspense>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-1 text-sm text-slate-500">Owner: {project.owner}</p>
    </header>
  );
}

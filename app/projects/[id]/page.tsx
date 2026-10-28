import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, getProjectSummary } from "@/lib/projects";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return { title: getProjectSummary(id)?.name ?? "Project" };
}

export default async function ProjectOverviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProject(id);
  if (!project) notFound();

  const done = project.tasks.filter((t) => t.status === "done").length;

  return (
    <div className="space-y-4">
      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-2 text-lg font-semibold">Overview</h2>
        <p className="text-slate-700 dark:text-slate-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded bg-slate-100 px-2 py-0.5 text-xs dark:bg-slate-800">#{tag}</span>
          ))}
        </div>
      </section>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"><p className="text-sm text-slate-500">Progress</p><p className="text-2xl font-bold">{project.progress}%</p></div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"><p className="text-sm text-slate-500">Team members</p><p className="text-2xl font-bold">{project.team.length}</p></div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"><p className="text-sm text-slate-500">Tasks done</p><p className="text-2xl font-bold">{done} / {project.tasks.length}</p></div>
      </div>
    </div>
  );
}

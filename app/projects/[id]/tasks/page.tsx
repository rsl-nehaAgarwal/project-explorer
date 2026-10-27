import { notFound } from "next/navigation";
import { getProject } from "@/lib/projects";

const LABELS = { todo: "To do", "in-progress": "In progress", done: "Done" } as const;

export default async function ProjectTasksPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProject(id);
  if (!project) notFound();

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-4 text-lg font-semibold">Tasks</h2>
      <ul className="space-y-2">
        {project.tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2 dark:bg-slate-800/60">
            <span>{task.title}</span>
            <span className="text-xs font-medium text-slate-500">{LABELS[task.status]}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

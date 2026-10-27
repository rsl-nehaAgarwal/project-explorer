import { notFound } from "next/navigation";
import { getProject } from "@/lib/projects";

export default async function ProjectActivityPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProject(id);
  if (!project) notFound();

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-4 text-lg font-semibold">Activity</h2>
      <ol className="space-y-3 border-l-2 border-slate-200 pl-4 dark:border-slate-700">
        {project.activity.map((item, i) => (
          <li key={i}>
            <p>{item.text}</p>
            <p className="text-xs text-slate-500">{item.when}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

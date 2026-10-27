import { notFound } from "next/navigation";
import { getProject } from "@/lib/projects";

export default async function ProjectTeamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProject(id);
  if (!project) notFound();

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-4 text-lg font-semibold">Team</h2>
      <ul className="divide-y divide-slate-200 dark:divide-slate-800">
        {project.team.map((member) => (
          <li key={member.name} className="flex items-center justify-between py-3">
            <span className="font-medium">{member.name}</span>
            <span className="text-sm text-slate-500">{member.role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

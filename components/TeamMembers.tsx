import { getAllProjects } from "@/lib/projects";
import { sleep } from "@/lib/utils";

// A slower Server Component (4.5 seconds) so the two panels stream in at different times.
export async function TeamMembers() {
  await sleep(4500);
  const members = new Map<string, string>();
  for (const project of getAllProjects()) {
    for (const member of project.team) members.set(member.name, member.role);
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-4 text-lg font-semibold">Team Members</h2>
      <ul className="space-y-2">
        {[...members.entries()].slice(0, 6).map(([name, role]) => (
          <li key={name} className="flex items-center justify-between text-sm">
            <span className="font-medium">{name}</span>
            <span className="text-slate-500">{role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

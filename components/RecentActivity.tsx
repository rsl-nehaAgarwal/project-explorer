import { getAllProjects } from "@/lib/projects";
import { sleep } from "@/lib/utils";

// A Server Component that simulates a slow data fetch (2.5 seconds).
export async function RecentActivity() {
  await sleep(2500);
  const items = getAllProjects()
    .flatMap((p) => p.activity.map((a) => ({ ...a, project: p.name })))
    .slice(0, 6);

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-4 text-lg font-semibold">Recent Activity</h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="text-sm">
            <p>{item.text}</p>
            <p className="text-xs text-slate-500">{item.project} &middot; {item.when}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

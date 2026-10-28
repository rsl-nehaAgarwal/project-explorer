import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import { StatusBadge } from "@/components/StatusBadge";

export default function HomePage() {
  const featured = getAllProjects().slice(0, 3);

  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-indigo-600 px-6 py-12 text-white">
        <h1 className="text-3xl font-bold sm:text-4xl">Welcome to Project Explorer</h1>
        <p className="mt-3 max-w-2xl text-indigo-100">
          Browse projects, dive into team, task and activity details, and keep an eye on what is
          happening across your organisation.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/projects" className="rounded-md bg-white px-4 py-2 font-medium text-indigo-700 hover:bg-indigo-50">
            Browse projects
          </Link>
          <Link href="/dashboard" className="rounded-md border border-white/60 px-4 py-2 font-medium hover:bg-white/10">
            Open dashboard
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Featured projects</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.id}
              href={`/projects/${p.id}`}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <h3 className="font-semibold">{p.name}</h3>
                <StatusBadge status={p.status} />
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-2xl font-bold">Project not found</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        We couldn&apos;t find a project with that ID. It may have been removed or the link may be wrong.
      </p>
      <Link href="/projects" className="mt-5 inline-block rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
        Browse all projects
      </Link>
    </div>
  );
}

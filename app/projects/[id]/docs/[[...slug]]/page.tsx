import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectSummary } from "@/lib/projects";

// Optional catch-all route: matches /projects/1/docs, /projects/1/docs/setup,
// /projects/1/docs/setup/database and any deeper path.
const DOCS: Record<string, { title: string; body: string }> = {
  setup: { title: "Project setup", body: "Install the dependencies, copy the example environment file and start the dev server." },
  "setup/database": { title: "Database setup", body: "Create the database, run the migrations and seed the sample data before first use." },
  api: { title: "API reference", body: "Endpoints for listing projects, reading project details and posting activity updates." },
};

export default async function ProjectDocsPage({
  params,
}: {
  params: Promise<{ id: string; slug?: string[] }>;
}) {
  const { id, slug = [] } = await params;
  const project = getProjectSummary(id);
  if (!project) notFound();

  const path = slug.join("/");
  const doc = DOCS[path];
  const requested = `/projects/${id}/docs${path ? "/" + path : ""}`;

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-1 text-lg font-semibold">Documentation</h2>
      <p className="mb-4 text-sm text-slate-500">
        Requested path: <code className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-slate-800">{requested}</code>
      </p>

      {slug.length === 0 ? (
        <ul className="list-disc space-y-1 pl-6">
          {Object.entries(DOCS).map(([key, value]) => (
            <li key={key}>
              <Link href={`/projects/${id}/docs/${key}`} className="text-indigo-600 hover:underline dark:text-indigo-400">
                {value.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : doc ? (
        <>
          <h3 className="text-xl font-semibold">{doc.title}</h3>
          <p className="mt-2">{doc.body}</p>
        </>
      ) : (
        <p>
          There is no dedicated page for <strong>{path}</strong> yet. Path segments received:{" "}
          <code>[{slug.map((s) => `"${s}"`).join(", ")}]</code>
        </p>
      )}
    </section>
  );
}

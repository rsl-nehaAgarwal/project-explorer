import { getProjects, isStatus } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const first = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

export async function ProjectList({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const search = first(params.search)?.trim() ?? "";
  const statusParam = first(params.status);
  const status = isStatus(statusParam) ? statusParam : undefined;

  const projects = await getProjects({ search, status });

  const query = new URLSearchParams();
  if (search) query.set("search", search);
  if (status) query.set("status", status);

  if (projects.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500 dark:border-slate-700">
        No projects match your filters.
      </p>
    );
  }

  return (
    <>
      <p className="mb-3 text-sm text-slate-500">
        Showing {projects.length} project{projects.length === 1 ? "" : "s"}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} query={query.toString()} />
        ))}
      </div>
    </>
  );
}

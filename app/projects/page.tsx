import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectFilters } from "@/components/ProjectFilters";
import { ProjectList } from "@/components/ProjectList";
import { ProjectGridSkeleton, Skeleton } from "@/components/Skeletons";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <div>
      <h1 className="mb-1 text-3xl font-bold">Projects</h1>
      <p className="mb-6 text-slate-600 dark:text-slate-400">
        Search by name, description or tag, and filter by status. Filters live in the URL, so you can share them.
      </p>

      <Suspense fallback={<Skeleton className="mb-6 h-20 w-full max-w-xl" />}>
        <ProjectFilters />
      </Suspense>

      <Suspense fallback={<ProjectGridSkeleton />}>
        <ProjectList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

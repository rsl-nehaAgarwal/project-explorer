import { Suspense } from "react";
import { ProjectHeader } from "@/components/ProjectHeader";
import { ProjectHeaderSkeleton } from "@/components/Skeletons";

// Nested layout: the project name and tabs are shared by every page under /projects/[id].
export default function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  return (
    <div>
      <Suspense fallback={<ProjectHeaderSkeleton />}>
        <ProjectHeader params={params} />
      </Suspense>
      {children}
    </div>
  );
}

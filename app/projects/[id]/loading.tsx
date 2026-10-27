import { ProjectDetailSkeleton } from "@/components/Skeletons";

// Shown instantly while a project page (overview, team, tasks, activity) loads its data.
export default function Loading() {
  return <ProjectDetailSkeleton />;
}

import type { ProjectStatus } from "@/lib/projects";

const styles: Record<ProjectStatus, string> = {
  active: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  completed: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  "on-hold": "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
};

const labels: Record<ProjectStatus, string> = {
  active: "Active",
  completed: "Completed",
  "on-hold": "On hold",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

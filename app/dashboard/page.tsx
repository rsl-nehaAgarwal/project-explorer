import type { Metadata } from "next";
import { Suspense } from "react";
import { RecentActivity } from "@/components/RecentActivity";
import { TeamMembers } from "@/components/TeamMembers";
import { PanelSkeleton } from "@/components/Skeletons";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardPage() {
  const projects = getAllProjects();
  const stats = [
    { label: "Total projects", value: projects.length },
    { label: "Active", value: projects.filter((p) => p.status === "active").length },
    { label: "Completed", value: projects.filter((p) => p.status === "completed").length },
    { label: "On hold", value: projects.filter((p) => p.status === "on-hold").length },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-1 text-slate-600 dark:text-slate-400">
          The summary cards render immediately. The panels below are slow Server Components that stream in
          on their own.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm text-slate-500">{s.label}</p>
            <p className="text-3xl font-bold">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Suspense fallback={<PanelSkeleton title="Recent Activity" />}>
          <RecentActivity />
        </Suspense>
        <Suspense fallback={<PanelSkeleton title="Team Members" />}>
          <TeamMembers />
        </Suspense>
      </div>
    </div>
  );
}

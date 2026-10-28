import type { Metadata } from "next";

export const metadata: Metadata = { title: "Reports" };

export default function ReportsPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold">Reports</h1>
      <p className="text-slate-600 dark:text-slate-400">
        This reports page uses the shared dashboard layout, so the sidebar stays in place while you navigate.
      </p>
    </div>
  );
}

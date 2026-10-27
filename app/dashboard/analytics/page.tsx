import type { Metadata } from "next";

export const metadata: Metadata = { title: "Analytics" };

export default function AnalyticsPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <p className="text-slate-600 dark:text-slate-400">
        This analytics page uses the shared dashboard layout, so the sidebar stays in place while you navigate.
      </p>
    </div>
  );
}

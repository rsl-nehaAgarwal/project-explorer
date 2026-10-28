import type { Metadata } from "next";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold">Team</h1>
      <p className="text-slate-600 dark:text-slate-400">
        This team page uses the shared dashboard layout, so the sidebar stays in place while you navigate.
      </p>
    </div>
  );
}

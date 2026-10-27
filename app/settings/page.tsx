import type { Metadata } from "next";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-1 text-lg font-semibold">Appearance</h2>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
          Switch between light and dark mode. Your choice is remembered in this browser.
        </p>
        <ThemeToggle />
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="mb-1 text-lg font-semibold">Favourites</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Star a project on the Projects page to mark it as a favourite. Favourites are stored locally
          in your browser.
        </p>
      </section>
    </div>
  );
}

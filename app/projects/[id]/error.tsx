"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ProjectError({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/40">
      <h2 className="text-lg font-semibold text-red-800 dark:text-red-300">We couldn&apos;t load this project</h2>
      <p className="mt-1 text-sm text-red-700 dark:text-red-400">
        Something went wrong while fetching the project details. The rest of the app is still working.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => retry()}
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Try again
        </button>
        <Link href="/projects" className="rounded-md border border-red-300 px-4 py-2 text-sm font-medium dark:border-red-800">
          Back to projects
        </Link>
      </div>
    </div>
  );
}

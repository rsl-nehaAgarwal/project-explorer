const card =
  "rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900";

export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-md bg-slate-200 dark:bg-slate-700 ${className}`}
    />
  );
}

export function ProjectGridSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="status" aria-label="Loading projects">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className={card}>
          <Skeleton className="mb-3 h-5 w-2/3" />
          <Skeleton className="mb-2 h-3 w-full" />
          <Skeleton className="mb-4 h-3 w-4/5" />
          <Skeleton className="h-2 w-full" />
        </div>
      ))}
    </div>
  );
}

export function ProjectHeaderSkeleton() {
  return (
    <div className="mb-6" role="status" aria-label="Loading project header">
      <Skeleton className="mb-3 h-4 w-32" />
      <Skeleton className="mb-4 h-8 w-64" />
      <Skeleton className="h-9 w-full max-w-md" />
    </div>
  );
}

export function ProjectDetailSkeleton() {
  return (
    <div className="space-y-4" role="status" aria-label="Loading project details">
      <div className={card}>
        <Skeleton className="mb-3 h-5 w-40" />
        <Skeleton className="mb-2 h-3 w-full" />
        <Skeleton className="mb-2 h-3 w-5/6" />
        <Skeleton className="h-3 w-2/3" />
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className={card}>
            <Skeleton className="mb-3 h-4 w-20" />
            <Skeleton className="h-6 w-12" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PanelSkeleton({ title }: { title: string }) {
  return (
    <div className={card} role="status" aria-label={`Loading ${title}`}>
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <p className="mt-4 text-xs text-slate-500">Loading…</p>
    </div>
  );
}

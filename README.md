# Project Explorer

A lightweight project management portal built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production build
```

## What is where

| Requirement | Where it lives |
|---|---|
| Home / About / Dashboard / Projects / Settings | `app/page.tsx`, `app/about`, `app/dashboard`, `app/projects`, `app/settings` |
| Shared header + navigation | `app/layout.tsx`, `components/Navbar.tsx`, `components/NavLinks.tsx` |
| Dashboard layout (sidebar, dashboard pages only) | `app/dashboard/layout.tsx` |
| Dynamic route | `app/projects/[id]` |
| Nested routes + nested layout | `app/projects/[id]/layout.tsx`, `team`, `tasks`, `activity` |
| Catch-all route | `app/projects/[id]/docs/[[...slug]]/page.tsx` |
| Search / filter with query parameters | `app/projects/page.tsx`, `components/ProjectFilters.tsx`, `components/ProjectList.tsx` |
| Loading UI | `app/projects/[id]/loading.tsx`, `components/Skeletons.tsx` |
| Error handling with retry | `app/projects/[id]/error.tsx` |
| Streaming with Suspense | `app/dashboard/page.tsx`, `components/RecentActivity.tsx`, `components/TeamMembers.tsx` |
| Client-side interactivity | `components/ThemeToggle.tsx`, `components/FavoriteButton.tsx` |
| Not-found pages | `app/not-found.tsx`, `app/projects/[id]/not-found.tsx` |
| Local JSON dataset | `data/projects.json`, `lib/projects.ts` |

## Try these

- `/projects?search=nextjs`, `/projects?status=active`, `/projects?search=dashboard&status=completed`
- `/projects/1`, `/projects/1/team`, `/projects/1/tasks`, `/projects/1/activity`
- `/projects/1/docs`, `/projects/1/docs/setup`, `/projects/1/docs/setup/database`
- `/projects/99` shows the custom not-found page.
- `/projects/6` fails the first time it loads (simulated) so you can see the error UI; click **Try again** to load it.
- `/dashboard` renders instantly while Recent Activity (about 2.5s) and Team Members (about 4.5s) stream in.

## Notes

- Server Components are the default. Client Components are used only for interactivity: navigation highlighting, theme toggle, search filter, favourite button and project tabs.
- Next.js 16 with Cache Components: request-dependent data (`params`, `searchParams`) and slow fetches sit inside `<Suspense>` / `loading.tsx` boundaries.

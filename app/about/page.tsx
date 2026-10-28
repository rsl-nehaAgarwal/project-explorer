import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <article className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold">About Project Explorer</h1>
      <p>
        Project Explorer is a lightweight project management portal. Employees can browse projects,
        open a project to see its team, tasks and activity, and read project documentation.
      </p>
      <h2 className="pt-2 text-xl font-semibold">How it is built</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Server Components</strong> render pages, layouts and data-driven lists, so very little
          JavaScript is sent to the browser.
        </li>
        <li>
          <strong>Client Components</strong> are used only where interactivity is needed: navigation
          highlighting, the theme toggle, the search filter and the favourite button.
        </li>
        <li>
          <strong>Nested layouts, dynamic routes and a catch-all route</strong> organise the project
          pages, with loading, error and not-found states built in.
        </li>
        <li>
          <strong>Suspense streaming</strong> keeps the dashboard responsive while slower panels load.
        </li>
      </ul>
    </article>
  );
}

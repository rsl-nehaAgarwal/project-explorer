import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-16 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 inline-block rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
        Go home
      </Link>
    </div>
  );
}

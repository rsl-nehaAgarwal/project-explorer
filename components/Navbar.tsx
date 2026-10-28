import Link from "next/link";
import { Suspense } from "react";
import { NavLinks } from "@/components/NavLinks";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NAV_LINKS } from "@/lib/nav";

function NavLinksFallback() {
  return (
    <ul className="flex flex-wrap items-center gap-1">
      {NAV_LINKS.map(({ href, label }) => (
        <li key={href}>
          <Link href={href} className="rounded-md px-3 py-2 text-sm font-medium">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3"
      >
        <Link href="/" className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
          Project Explorer
        </Link>
        <Suspense fallback={<NavLinksFallback />}>
          <NavLinks />
        </Suspense>
        <ThemeToggle />
      </nav>
    </header>
  );
}

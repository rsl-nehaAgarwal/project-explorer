"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/analytics", label: "Analytics" },
  { href: "/dashboard/reports", label: "Reports" },
  { href: "/dashboard/team", label: "Team" },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-1 md:flex-col">
      {LINKS.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              className={`block rounded-md px-3 py-2 text-sm font-medium ${
                active
                  ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

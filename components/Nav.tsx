'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/data", label: "Data" },
    { href: "/paper", label: "The Paper" },
    { href: "/articles", label: "Articles" },
  ];

  return (
    <nav className="sticky top-0 z-10 border-b border-stone-200 bg-stone-50/90 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <Link
          href="/"
          className="block"
        >
          <span className="block font-display text-lg font-semibold tracking-tight text-stone-900">
            Modern Exodus
          </span>
          <span className="mt-1 block text-xs uppercase tracking-[0.22em] text-stone-400">
            A thesis for the church
          </span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm sm:justify-end">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={
                  active
                    ? "text-stone-900 font-medium border-b border-stone-900 pb-0.5"
                    : "text-stone-500 hover:text-stone-900 transition-colors"
                }
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

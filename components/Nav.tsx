'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/paper", label: "The Paper" },
    { href: "/articles", label: "Articles" },
    { href: "/data", label: "Data" },
  ];

  return (
    <nav className="border-b border-stone-200 bg-stone-50/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-stone-900"
        >
          Modern Exodus
        </Link>
        <div className="flex items-center gap-8 text-sm">
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

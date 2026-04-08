import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-stone-200 bg-stone-50/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-stone-900">
          Modern Exodus
        </Link>
        <div className="flex items-center gap-8 text-sm text-stone-500">
          <Link href="/paper" className="hover:text-stone-900 transition-colors">
            The Paper
          </Link>
          <Link href="/articles" className="hover:text-stone-900 transition-colors">
            Articles
          </Link>
          <Link href="/data" className="hover:text-stone-900 transition-colors">
            Data
          </Link>
        </div>
      </div>
    </nav>
  );
}

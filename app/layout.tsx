import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  metadataBase: new URL("https://modernexodus.org"),
  title: {
    default: "Modern Exodus",
    template: "%s | Modern Exodus",
  },
  description:
    "A repository of data, argument, and theological reflection for churches and Christians evaluating the Modern Exodus thesis.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Modern Exodus",
    "Exodus thesis",
    "church",
    "data repository",
    "theology",
    "inflation",
    "economics",
  ],
  openGraph: {
    title: "Modern Exodus",
    description:
      "Data, argument, and theological reflection for churches and Christians evaluating the Modern Exodus thesis.",
    url: "https://modernexodus.org",
    siteName: "Modern Exodus",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Exodus",
    description:
      "Data, argument, and theological reflection for churches and Christians evaluating the Modern Exodus thesis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased">
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-stone-200 mt-24 py-12">
          <div className="max-w-4xl mx-auto px-6 grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="font-display text-xl font-semibold text-stone-900">
                Modern Exodus
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-500">
                A restrained repository for the data, paper, and essays that let
                visitors review the Modern Exodus thesis for themselves.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
                  Explore
                </p>
                <div className="mt-4 space-y-2 text-sm text-stone-500">
                  <Link href="/data" className="block hover:text-stone-900 transition-colors">
                    Data
                  </Link>
                  <Link href="/paper" className="block hover:text-stone-900 transition-colors">
                    The Paper
                  </Link>
                  <Link href="/articles" className="block hover:text-stone-900 transition-colors">
                    Articles
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
                  Note
                </p>
                <p className="mt-4 text-sm leading-relaxed text-stone-500">
                  For the church in its wilderness season. Paper by Austin Morrow.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

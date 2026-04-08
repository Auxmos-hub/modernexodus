import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Modern Exodus",
  description:
    "A resource for churches and Christians engaging the modern exodus thesis — data, analysis, and theological reflection for a people on the move.",
  openGraph: {
    title: "Modern Exodus",
    description:
      "A resource for churches and Christians engaging the modern exodus thesis.",
    url: "https://modernexodus.org",
    siteName: "Modern Exodus",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-stone-900">
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-stone-200 mt-24 py-12">
          <div className="max-w-4xl mx-auto px-6 text-stone-400 text-sm flex justify-between items-center">
            <span>Modern Exodus</span>
            <span>For the church in its wilderness season.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

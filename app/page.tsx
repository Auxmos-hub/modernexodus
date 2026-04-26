import Link from "next/link";
import DataWidget from "@/components/DataWidget";

const pathways = [
  {
    title: "Review the data",
    description:
      "Start with the economic and institutional reference points that visitors can inspect for themselves.",
    href: "/data",
    cta: "Explore the data →",
  },
  {
    title: "Read the paper",
    description:
      "If the evidence holds together, move into the full argument and its theological frame.",
    href: "/paper",
    cta: "Read the paper →",
  },
  {
    title: "Follow the essays",
    description:
      "Track the shorter pieces that extend, test, and apply the argument over time.",
    href: "/articles",
    cta: "Browse articles →",
  },
];

const articlePreviews = [
  {
    title: "The Pharaoh Economy: Extraction, Inflation, and the Commons",
    category: "Economics",
    date: "Coming soon",
    excerpt:
      "How modern monetary policy functions as a form of systemic extraction — and what the Exodus narrative has to say about it.",
  },
  {
    title: "Broken Spirits: Why the Church Isn't Hearing",
    category: "Theology",
    date: "Coming soon",
    excerpt:
      "The Exodus 6:9 problem. When people are ground down enough, even the word of liberation falls on deaf ears.",
  },
  {
    title: "What Does Wilderness Look Like Now?",
    category: "Formation",
    date: "Coming soon",
    excerpt:
      "Wilderness in the Exodus was not punishment — it was the necessary in-between. The place where a people is formed.",
  },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <section className="border-b border-stone-200 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.8fr)_minmax(280px,1fr)] md:items-start">
          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-widest text-stone-400">
              Data, argument, and supporting material
            </p>
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-tight text-stone-900 md:text-6xl">
              The people of God are being called out again.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-stone-600">
              The Exodus was not only an event. It was a pattern — oppression,
              cry, deliverance, covenant, wilderness, promised land. The argument here is that
              we are living inside that pattern again, and that the church needs
              language clear enough to see the moment for what it is.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-500">
              This site is meant to function as a repository of reviewable
              information. Start with the data, then move to the paper if the
              pattern looks credible enough to examine in full.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/data"
                className="bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-800"
              >
                Explore the data →
              </Link>
              <Link
                href="/paper"
                className="border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900"
              >
                Read the paper
              </Link>
            </div>
          </div>

          <aside className="border border-stone-200 bg-white p-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
              Start here
            </p>
            <ol className="mt-5 space-y-5 text-sm text-stone-600">
              {[
                "Review the core data points and sources.",
                "Read the full paper if the case is worth testing.",
                "Follow the article stream as the project develops.",
              ].map((item, index) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <span className="font-mono text-xs text-stone-300">
                    0{index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 border-t border-stone-100 pt-5 text-sm text-stone-500 leading-relaxed">
              The aim is not volume. It is a usable archive of claims, sources,
              and interpretation that people can inspect without noise.
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-stone-200 py-16">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-stone-400 mb-3">
            How to use the site
          </p>
          <h2 className="font-display text-3xl font-semibold text-stone-900">
            A simple way to evaluate the thesis.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pathways.map((path) => (
            <div key={path.title} className="border border-stone-200 bg-white p-6">
              <h3 className="font-display text-xl font-semibold text-stone-900">
                {path.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-500">
                {path.description}
              </p>
              <Link
                href={path.href}
                className="mt-6 inline-block text-sm font-medium text-stone-900 border-b border-stone-300 pb-0.5 hover:border-stone-900 transition-colors"
              >
                {path.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 border-b border-stone-200">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-3">
              The numbers behind the thesis
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-stone-500">
              A small sample from the data repository. The full page carries the
              longer explanations and source trails.
            </p>
          </div>
          <Link
            href="/data"
            className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
          >
            Open the full data repository →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DataWidget
            label="M2 Money Supply"
            sublabel="Since Jan 2020"
            value="+40%"
            description="The Fed expanded the money supply by 40% in two years — the fastest in modern history. Prices followed."
            source="Federal Reserve"
          />
          <DataWidget
            label="Purchasing Power"
            sublabel="USD, 2000–2024"
            value="−30%"
            description="A dollar today buys what 70 cents bought in 2000. The slow erosion of ordinary savings."
            source="BLS CPI-U"
          />
          <DataWidget
            label="CPI (All Items)"
            sublabel="2020–2024 cumulative"
            value="+22%"
            description="Official inflation since the pandemic. Shelter, food, and energy have run significantly higher."
            source="Bureau of Labor Statistics"
          />
        </div>
      </section>

      <section className="py-16 border-b border-stone-200">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <h2 className="font-display text-3xl font-semibold mb-6 text-stone-900">
              What the paper argues
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                The Exodus narrative in Scripture is more than history. It is a
                paradigm — the shape of how God moves when his people are
                trapped under oppressive systems. Brueggemann called it the
                "core testimony" of Israel's faith.
              </p>
              <p>
                The thesis is that present-day conditions — economic extraction,
                institutional decay, and the slow erosion of the commons — map
                onto the Exodus pattern with striking precision. We are in a
                moment of structured oppression. The question is whether the
                church will recognize the season.
              </p>
              <p>
                Exodus 6:9 records that the people could not hear Moses because
                of their "broken spirit and cruel slavery." Harsh labor had
                eaten their capacity for hope. The same dynamic operates today.
                This site exists to restore that capacity through data,
                analysis, and theological reflection.
              </p>
            </div>
            <Link
              href="/paper"
              className="inline-block mt-8 text-sm font-medium text-stone-900 border-b border-stone-400 pb-0.5 hover:border-stone-900 transition-colors"
            >
              Read the full paper →
            </Link>
          </div>
          <div className="md:col-span-2 space-y-6">
            <div className="bg-stone-100 p-6">
              <p className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-3">
                What this project is for
              </p>
              <ul className="space-y-3 text-sm leading-relaxed text-stone-600">
              <li>Give the church a legible account of the present moment.</li>
                <li>Maintain reviewable evidence and current reference points.</li>
                <li>Offer theological reflection without diluting urgency.</li>
              </ul>
            </div>
            <div className="bg-stone-100 p-6">
              <p className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-3">
                Key Scripture
              </p>
              <blockquote className="font-display text-lg text-stone-700 italic leading-relaxed">
                "They did not listen to Moses, because of their broken spirit
                and harsh slavery."
              </blockquote>
              <p className="text-sm text-stone-400 mt-3">Exodus 6:9</p>
            </div>
            <div className="bg-stone-100 p-6">
              <p className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-3">
                The Pattern
              </p>
              <ol className="space-y-2 text-sm text-stone-600">
                {["Oppression", "Cry", "Deliverance", "Covenant", "Wilderness", "Promised Land"].map(
                  (step, i) => (
                    <li key={step} className="flex items-center gap-3">
                      <span className="text-stone-300 font-mono text-xs">
                        0{i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  )
                )}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-stone-900">
              Recent articles
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-500 max-w-xl">
              Essays are still forthcoming, but the lanes are defined: economics,
              theology, and formation.
            </p>
          </div>
          <Link
            href="/articles"
            className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
          >
            All articles →
          </Link>
        </div>
        <div className="space-y-8">
          {articlePreviews.map((article) => (
            <div
              key={article.title}
              className="border-t border-stone-200 pt-8 grid grid-cols-1 gap-3 md:grid-cols-5 md:gap-6"
            >
              <div className="md:col-span-1">
                <span className="text-xs font-medium text-stone-400 uppercase tracking-wider">
                  {article.category}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-lg font-semibold text-stone-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <span className="text-xs text-stone-300 mt-3 block">
                  {article.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-stone-200 bg-white p-8 md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
            Primary invitation
          </p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold text-stone-900">
                Start with the evidence. Then read the whole argument.
              </h2>
              <p className="mt-3 text-stone-500 leading-relaxed">
                The homepage should let visitors inspect the underlying material
                first. If the data raises the right questions, the paper is the
                next move.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/data"
                className="bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-800"
              >
                Explore the data →
              </Link>
              <Link
                href="/paper"
                className="px-6 py-3 text-sm font-medium text-stone-700 border border-stone-300 transition-colors hover:border-stone-900 hover:text-stone-900"
              >
                Read the paper
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

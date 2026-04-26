import Link from "next/link";

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

const dataHighlights = [
  {
    label: "M2 Money Supply",
    sublabel: "Since Jan 2020",
    value: "+40%",
    description:
      "The Fed expanded the money supply by 40% in two years — the fastest in modern history. Prices followed.",
    source: "Federal Reserve",
  },
  {
    label: "Purchasing Power",
    sublabel: "USD, 2000–2024",
    value: "−30%",
    description:
      "A dollar today buys what 70 cents bought in 2000. The slow erosion of ordinary savings.",
    source: "BLS CPI-U",
  },
  {
    label: "CPI (All Items)",
    sublabel: "2020–2024 cumulative",
    value: "+22%",
    description:
      "Official inflation since the pandemic. Shelter, food, and energy have run significantly higher.",
    source: "Bureau of Labor Statistics",
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
    <div className="mx-auto max-w-4xl px-6">
      <section className="border-b border-stone-200 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.75fr)_minmax(260px,0.95fr)] md:items-start">
          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-stone-500">
              Data, argument, and supporting material
            </p>
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.06] text-stone-900 md:text-[4.2rem]">
              The people of God are being called out again.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-stone-700">
              The Exodus was not only an event. It was a pattern — oppression,
              cry, deliverance, covenant, wilderness, promised land. The
              argument here is that we are living inside that pattern again,
              and that the church needs language clear enough to see the moment
              for what it is.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
              This site is meant to function as a repository of reviewable
              information. Start with the data, then move to the paper if the
              pattern looks credible enough to examine in full.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/data"
                className="bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-800"
              >
                Explore the data →
              </Link>
              <Link
                href="/paper"
                className="text-sm font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-900"
              >
                Read the paper
              </Link>
            </div>
            <p className="mt-8 max-w-xl text-sm leading-7 text-stone-500">
              Begin with the repository of claims and sources. Move into the
              paper once the evidence feels sturdy enough to test.
            </p>
          </div>

          <aside className="md:border-l md:border-stone-200 md:pl-8">
            <div className="border-t border-stone-300 pt-5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
                Start here
              </p>
              <ol className="mt-5 space-y-5 text-sm leading-7 text-stone-600">
                {[
                  "Review the core data points and sources.",
                  "Read the full paper if the case is worth testing.",
                  "Follow the article stream as the project develops.",
                ].map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-mono text-xs text-stone-400">
                      0{index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-8 bg-stone-100/80 px-5 py-5">
              <p className="text-sm leading-7 text-stone-600">
                The aim is not volume. It is a usable archive of claims,
                sources, and interpretation that people can inspect without
                noise.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-stone-200 py-16 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-stone-500">
            How to use the site
          </p>
          <h2 className="font-display text-3xl font-semibold text-stone-900">
            A simple way to evaluate the thesis.
          </h2>
          <p className="mt-4 text-base leading-8 text-stone-600">
            The site works best when read in order: evidence first, then the
            longer argument, then the shorter essays that extend it.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {pathways.map((path) => (
            <article key={path.title} className="border-t border-stone-200 pt-5">
              <h3 className="font-display text-xl font-semibold text-stone-900">
                {path.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                {path.description}
              </p>
              <Link
                href={path.href}
                className="mt-5 inline-block text-sm font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-900"
              >
                {path.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-stone-200 py-16 md:py-20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-stone-500">
              The numbers behind the thesis
            </p>
            <h2 className="font-display text-3xl font-semibold text-stone-900">
              A small sample from the data repository.
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              The full data page carries the longer explanations and source
              trails. These figures show the type of reference points the case
              is built on.
            </p>
          </div>
          <Link
            href="/data"
            className="text-sm font-medium text-stone-600 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-900"
          >
            Open the full data repository →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {dataHighlights.map((item) => (
            <article key={item.label} className="border border-stone-200 bg-white p-6">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs text-stone-400">{item.sublabel}</p>
                </div>
                <span className="font-display text-2xl font-semibold text-stone-900">
                  {item.value}
                </span>
              </div>
              <p className="text-sm leading-7 text-stone-600">{item.description}</p>
              <p className="mt-4 text-xs text-stone-400">Source: {item.source}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-stone-200 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1.55fr)_minmax(260px,0.95fr)]">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-stone-500">
              What the paper argues
            </p>
            <h2 className="font-display text-3xl font-semibold text-stone-900">
              A theological reading of the present moment.
            </h2>
            <div className="mt-6 space-y-5 text-stone-700 leading-8">
              <p>
                The Exodus narrative in Scripture is more than history. It is a
                paradigm — the shape of how God moves when his people are
                trapped under oppressive systems. Brueggemann called it the
                "core testimony" of Israel&apos;s faith.
              </p>
              <p>
                The thesis is that present-day conditions — economic
                extraction, institutional decay, and the slow erosion of the
                commons — map onto the Exodus pattern with striking precision.
                We are in a moment of structured oppression. The question is
                whether the church will recognize the season.
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
              className="mt-8 inline-block text-sm font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-900"
            >
              Read the full paper →
            </Link>
          </div>

          <div className="space-y-8">
            <div className="bg-stone-100/80 p-6">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
                What this project is for
              </p>
              <ul className="space-y-3 text-sm leading-7 text-stone-600">
                <li>Give the church a legible account of the present moment.</li>
                <li>Maintain reviewable evidence and current reference points.</li>
                <li>Offer theological reflection without diluting urgency.</li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-5">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
                Key Scripture
              </p>
              <blockquote className="mt-4 font-display text-[1.35rem] italic leading-relaxed text-stone-800">
                "They did not listen to Moses, because of their broken spirit
                and harsh slavery."
              </blockquote>
              <p className="mt-3 text-sm text-stone-500">Exodus 6:9</p>
            </div>

            <div className="border-t border-stone-200 pt-5">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
                The Pattern
              </p>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-stone-600">
                {[
                  "Oppression",
                  "Cry",
                  "Deliverance",
                  "Covenant",
                  "Wilderness",
                  "Promised Land",
                ].map((step, i) => (
                  <li key={step} className="flex items-center gap-3">
                    <span className="font-mono text-xs text-stone-400">
                      0{i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-stone-900">
              Recent articles
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-7 text-stone-600">
              Essays are still forthcoming, but the lanes are defined:
              economics, theology, and formation.
            </p>
          </div>
          <Link
            href="/articles"
            className="text-sm font-medium text-stone-600 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-900"
          >
            All articles →
          </Link>
        </div>

        <div className="mt-8 space-y-8">
          {articlePreviews.map((article) => (
            <article
              key={article.title}
              className="grid grid-cols-1 gap-3 border-t border-stone-200 pt-8 md:grid-cols-5 md:gap-6"
            >
              <div className="md:col-span-1">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-stone-500">
                  {article.category}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="mb-2 font-display text-lg font-semibold text-stone-900">
                  {article.title}
                </h3>
                <p className="text-sm leading-7 text-stone-600">{article.excerpt}</p>
                <span className="mt-3 block text-xs text-stone-400">
                  {article.date}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-stone-300 pt-8 md:pt-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-stone-500">
            Primary invitation
          </p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold text-stone-900">
                Start with the evidence. Then read the whole argument.
              </h2>
              <p className="mt-3 text-base leading-8 text-stone-600">
                The homepage should let visitors inspect the underlying material
                first. If the data raises the right questions, the paper is the
                next move.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/data"
                className="bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-800"
              >
                Explore the data →
              </Link>
              <Link
                href="/paper"
                className="text-sm font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-900"
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

import Link from "next/link";
import DataWidget from "@/components/DataWidget";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-20 pb-16 border-b border-stone-200">
        <p className="text-sm font-medium text-stone-400 uppercase tracking-widest mb-6">
          A thesis for the church
        </p>
        <h1 className="font-display text-5xl font-semibold leading-tight text-stone-900 mb-8 max-w-2xl">
          The people of God are being called out again.
        </h1>
        <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mb-10">
          The Exodus was not a single event. It was a pattern — oppression,
          cry, deliverance, wilderness, covenant. The evidence suggests we are
          inside that pattern right now. This site exists to help the church
          see it clearly, and respond faithfully.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/paper"
            className="bg-stone-900 text-stone-50 px-6 py-3 text-sm font-medium hover:bg-stone-800 transition-colors"
          >
            Read the paper →
          </Link>
          <Link
            href="/data"
            className="text-stone-600 text-sm font-medium hover:text-stone-900 transition-colors border-b border-stone-300 pb-0.5"
          >
            View the data
          </Link>
        </div>
      </section>

      {/* Data widgets */}
      <section className="py-16 border-b border-stone-200">
        <h2 className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-8">
          The numbers behind the thesis
        </h2>
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

      {/* The thesis */}
      <section className="py-16 border-b border-stone-200">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <h2 className="font-display text-3xl font-semibold mb-6 text-stone-900">
              What is the Modern Exodus thesis?
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
                institutional decay, the slow erosion of the commons — map onto
                the Exodus pattern with striking precision. We are in a moment
                of structured oppression. The question is whether the church
                will recognize the season.
              </p>
              <p>
                Exodus 6:9 records that the people could not hear Moses because
                of their "broken spirit and cruel slavery." Harsh labor had
                eaten their capacity for hope. The same dynamic operates today.
                This site exists to restore that capacity — through data,
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
                {["Oppression", "Cry", "Deliverance", "Wilderness", "Covenant"].map(
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

      {/* Articles preview */}
      <section className="py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-display text-2xl font-semibold text-stone-900">
            Recent articles
          </h2>
          <Link
            href="/articles"
            className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
          >
            All articles →
          </Link>
        </div>
        <div className="space-y-8">
          {[
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
          ].map((article) => (
            <div
              key={article.title}
              className="border-t border-stone-200 pt-8 grid grid-cols-5 gap-6"
            >
              <div className="col-span-1">
                <span className="text-xs font-medium text-stone-400 uppercase tracking-wider">
                  {article.category}
                </span>
              </div>
              <div className="col-span-4">
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
      </section>
    </div>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Articles",
  description: "Breakdowns, analysis, and theological reflection on the Modern Exodus thesis.",
};

const articles = [
  {
    title: "The Pharaoh Economy: Extraction, Inflation, and the Commons",
    category: "Economics",
    date: "Coming soon",
    excerpt:
      "How modern monetary policy functions as a form of systemic extraction — and what the Exodus narrative has to say about it. Pharaoh's power came from the labor of the Israelites. Central bank power comes from the same source.",
  },
  {
    title: "Broken Spirits: Why the Church Isn't Hearing",
    category: "Theology",
    date: "Coming soon",
    excerpt:
      "The Exodus 6:9 problem. When people are ground down enough, even the word of liberation falls on deaf ears. This isn't a failure of faith — it's a predictable consequence of systemic exhaustion.",
  },
  {
    title: "What Does Wilderness Look Like Now?",
    category: "Formation",
    date: "Coming soon",
    excerpt:
      "Wilderness in the Exodus was not punishment — it was the necessary in-between. The place where a people is formed before they're ready to inhabit the promised land. What does that formation look like today?",
  },
  {
    title: "P=E/t: Why Inflation is a Spiritual Issue",
    category: "Economics",
    date: "Coming soon",
    excerpt:
      "Money is the encapsulation of human time and energy. If that's true, then the erosion of purchasing power is the erosion of human life itself — not just financially, but theologically.",
  },
  {
    title: "The Printing Press and the Blockchain",
    category: "Technology",
    date: "Coming soon",
    excerpt:
      "The Protestant Reformation was made possible by a neutral technology: the printing press. Could a similar dynamic be at work today with decentralized money? What the Church's history with information monopolies teaches us about money monopolies.",
  },
  {
    title: "Arks and Idols: The Two Uses of Gold",
    category: "Theology",
    date: "Coming soon",
    excerpt:
      "The same gold that built the ark of the covenant built the golden calf. The substance is neutral — it is the condition of the heart of the builder that determines what gets made. Everything depends on how you see.",
  },
];

export default function ArticlesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="border-b border-stone-200 pb-12 mb-12">
        <p className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-4">
          Articles
        </p>
        <h1 className="font-display text-4xl font-semibold text-stone-900 mb-4">
          Breakdowns &amp; Analysis
        </h1>
        <p className="text-stone-500 text-lg max-w-xl leading-relaxed">
          Deeper dives into specific aspects of the thesis — economic, theological, and formational.
        </p>
        <p className="text-sm text-stone-400 leading-relaxed max-w-2xl mt-5">
          New here? Read <Link href="/paper" className="text-stone-600 hover:text-stone-900">the paper</Link> first, then return here for shorter companion pieces.
        </p>
      </div>

      <div className="space-y-0">
        {articles.map((article) => (
          <div
            key={article.title}
            className="border-t border-stone-200 py-10 grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-8 first:border-t-0"
          >
            <div className="md:col-span-1 pt-1">
              <span className="text-xs font-medium text-stone-400 uppercase tracking-wider block mb-2">
                {article.category}
              </span>
              <span className="text-xs text-stone-300">{article.date}</span>
            </div>
            <div className="md:col-span-4">
              <h2 className="font-display text-xl font-semibold text-stone-900 mb-3 leading-snug">
                {article.title}
              </h2>
              <p className="text-stone-500 leading-relaxed">{article.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

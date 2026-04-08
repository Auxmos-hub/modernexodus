export const metadata = {
  title: "Data — Modern Exodus",
  description: "The economic data behind the Modern Exodus thesis.",
};

const datasets = [
  {
    title: "M2 Money Supply",
    value: "+35%",
    period: "2019–2021",
    detail: "35% of all US dollars in circulation today were created in a two-year window. From 2019 to 2020, M2 increased by 19%, followed by 16% the following year. Everyone holding US dollars was diluted by 35% of the whole.",
    source: "Federal Reserve (FRED)",
    sourceUrl: "https://fred.stlouisfed.org/series/WM2NS/#",
    implication: "In 35 of every 100 dollars of savings, the life energy stored there was siphoned and redistributed without the holder's consent."
  },
  {
    title: "Dollar Purchasing Power",
    value: "−97%",
    period: "1913–2022",
    detail: "The United States dollar has lost about 97% of its purchasing power since the founding of the Federal Reserve in 1913. That means 97% of the human time and energy deposited in 1913 was taken from those who made the initial deposit.",
    source: "Bureau of Labor Statistics CPI-U",
    sourceUrl: "https://www.visualcapitalist.com/purchasing-power-of-the-u-s-dollar-over-time",
    implication: "A dollar deposited in 1913 today buys roughly what three cents would have then. The theft was slow, cumulative, and nearly invisible at any given moment."
  },
  {
    title: "Wage-Productivity Divergence",
    value: "1971",
    period: "The inflection point",
    detail: "From 1948 to 1973, productivity increased 96.7% and hourly compensation increased 91.3% — nearly in lockstep. From 1973 to 2013, productivity increased 74.4% while hourly compensation increased only 9.2%. The divergence began precisely in 1971 when the US abandoned the gold standard.",
    source: "Economic Policy Institute / Bureau of Labor Statistics",
    sourceUrl: "https://www.epi.org/publication/charting-wage-stagnation/",
    implication: "Workers produce more and receive less. The difference doesn't disappear — it gets redistributed upward via the inflationary mechanism."
  },
  {
    title: "Cumulative Inflation",
    value: "2,923%",
    period: "1913–July 2022",
    detail: "Cumulative inflation since the founding of the Federal Reserve. The YoY rate compounds exponentially. A 2% annual inflation target, maintained for 50 years, is not a small thing — it is the mechanism by which value is quietly extracted from the population over time.",
    source: "InflationData.com / BLS",
    sourceUrl: "https://inflationdata.com/articles/2022/08/10/u-s-cumulative-inflation-since-1913",
    implication: "What appears moderate year-over-year is catastrophic across a human lifespan."
  },
];

export default function DataPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="border-b border-stone-200 pb-12 mb-12">
        <p className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-4">
          The Data
        </p>
        <h1 className="font-display text-4xl font-semibold text-stone-900 mb-4">
          What the numbers say
        </h1>
        <p className="text-stone-500 text-lg max-w-xl leading-relaxed">
          The Modern Exodus thesis is not abstract. It has a paper trail. These are the data points
          that ground the argument in empirical reality.
        </p>
      </div>

      <div className="space-y-12">
        {datasets.map((d) => (
          <div key={d.title} className="border border-stone-200 bg-white p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="font-display text-2xl font-semibold text-stone-900 mb-1">
                  {d.title}
                </h2>
                <p className="text-xs text-stone-400 uppercase tracking-wider">{d.period}</p>
              </div>
              <span className="font-display text-4xl font-semibold text-stone-900 ml-8">
                {d.value}
              </span>
            </div>
            <p className="text-stone-600 leading-relaxed mb-4">{d.detail}</p>
            <div className="border-t border-stone-100 pt-4 mt-4">
              <p className="text-sm text-stone-500 italic leading-relaxed mb-3">
                <span className="font-medium not-italic text-stone-700">Implication: </span>
                {d.implication}
              </p>
              <p className="text-xs text-stone-300">
                Source: {d.source}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-stone-200 pt-12">
        <p className="text-sm text-stone-400 leading-relaxed max-w-2xl">
          <span className="font-medium text-stone-600">A note on sources.</span>{" "}
          The data cited here uses government and institutional sources — including those the thesis
          critiques. The irony is intentional. Even by the official metrics, the scale of purchasing
          power destruction is staggering. The actual figures, adjusted for methodology changes,
          are likely worse.
        </p>
      </div>
    </div>
  );
}

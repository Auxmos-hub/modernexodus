import Link from "next/link";
import LiveDataCard, { type LiveDataCardData } from "@/components/LiveDataCard";
import {
  fetchFredSeries,
  findObservationAtOrBefore,
  lastNValues,
  latestObservation,
  percentChange,
} from "@/lib/fred";

export const metadata = {
  title: "Data",
  description: "Reviewable economic reference points behind the Modern Exodus thesis.",
};

export const revalidate = 21600;

const datasets = [
  {
    title: "M2 Money Supply",
    value: "+35%",
    period: "2019–2021",
    detail:
      "35% of all US dollars in circulation today were created in a two-year window. From 2019 to 2020, M2 increased by 19%, followed by 16% the following year. Everyone holding US dollars was diluted by 35% of the whole.",
    source: "Federal Reserve (FRED)",
    sourceUrl: "https://fred.stlouisfed.org/series/WM2NS/#",
    implication:
      "In 35 of every 100 dollars of savings, the life energy stored there was siphoned and redistributed without the holder's consent.",
  },
  {
    title: "Dollar Purchasing Power",
    value: "−97%",
    period: "1913–2022",
    detail:
      "The United States dollar has lost about 97% of its purchasing power since the founding of the Federal Reserve in 1913. That means 97% of the human time and energy deposited in 1913 was taken from those who made the initial deposit.",
    source: "Bureau of Labor Statistics CPI-U",
    sourceUrl: "https://www.visualcapitalist.com/purchasing-power-of-the-u-s-dollar-over-time",
    implication:
      "A dollar deposited in 1913 today buys roughly what three cents would have then. The theft was slow, cumulative, and nearly invisible at any given moment.",
  },
  {
    title: "Wage-Productivity Divergence",
    value: "1971",
    period: "The inflection point",
    detail:
      "From 1948 to 1973, productivity increased 96.7% and hourly compensation increased 91.3% — nearly in lockstep. From 1973 to 2013, productivity increased 74.4% while hourly compensation increased only 9.2%. The divergence began precisely in 1971 when the US abandoned the gold standard.",
    source: "Economic Policy Institute / Bureau of Labor Statistics",
    sourceUrl: "https://www.epi.org/publication/charting-wage-stagnation/",
    implication:
      "Workers produce more and receive less. The difference doesn't disappear — it gets redistributed upward via the inflationary mechanism.",
  },
  {
    title: "Cumulative Inflation",
    value: "2,923%",
    period: "1913–July 2022",
    detail:
      "Cumulative inflation since the founding of the Federal Reserve. The YoY rate compounds exponentially. A 2% annual inflation target, maintained for 50 years, is not a small thing — it is the mechanism by which value is quietly extracted from the population over time.",
    source: "InflationData.com / BLS",
    sourceUrl: "https://inflationdata.com/articles/2022/08/10/u-s-cumulative-inflation-since-1913",
    implication:
      "What appears moderate year-over-year is catastrophic across a human lifespan.",
  },
];

const chapwoodComparison = [
  {
    title: "Official CPI lens",
    sourceLabel: "BLS / FRED",
    sourceUrl: "https://fred.stlouisfed.org/series/CPIAUCSL",
    points: [
      "National, official inflation series used in mainstream reporting.",
      "Updated monthly and easy to compare across time.",
      "Best for showing that even the official measure still reflects serious cumulative pressure.",
    ],
  },
  {
    title: "Chapwood lens",
    sourceLabel: "Chapwood Index",
    sourceUrl: "https://chapwoodindex.com/approach/",
    points: [
      "City-by-city alternative inflation view built around 150 commonly purchased items.",
      "Updated twice a year rather than monthly.",
      "Useful as a pressure test when the official CPI framing feels too abstract or too mild.",
    ],
  },
] as const;

const readingNotes = [
  {
    label: "How to use this page",
    text: "Start with the live series, then move into the reference sections below if you want the slower historical framing and source trail.",
  },
  {
    label: "What these data points do",
    text: "They do not prove the whole thesis by themselves. They establish the pressure, extraction, and distortion the paper is interpreting.",
  },
  {
    label: "Limits to keep in view",
    text: "FRED reflects official releases, not a bespoke cost-of-living model. The live layer is a credible front door, not the last word on household pain.",
  },
] as const;

const fallbackLiveCards: LiveDataCardData[] = [
  {
    title: "M2 Money Supply",
    value: "$22.7T",
    context: "Weekly money stock · +47.9% vs. Jan 2020",
    interpretation:
      "The post-2022 pullback did not unwind the pandemic-era expansion. The stock of money remains materially larger than it was before 2020.",
    sourceLabel: "FRED · WM2NS",
    sourceUrl: "https://fred.stlouisfed.org/series/WM2NS",
    publishedAt: "Mar 2, 2026",
    sparkline: [22058, 22063, 22208.1, 22182.2, 22207.4, 22097, 22263.9, 22232.5, 22292.4, 22265.7, 22386.9, 22416, 22500.6, 22586.2, 22634.6, 22646.5, 22578.7, 22485.3, 22385.1, 22463.6, 22515.2, 22565.4, 22578.9, 22695.9],
  },
  {
    title: "Fed Balance Sheet",
    value: "$6.7T",
    context: "Federal Reserve assets · +61.6% vs. Jan 2020",
    interpretation:
      "The balance sheet is down from the emergency peak, but the system is still carrying a far larger central-bank footprint than it did before 2020.",
    sourceLabel: "FRED · WALCL",
    sourceUrl: "https://fred.stlouisfed.org/series/WALCL",
    publishedAt: "Apr 22, 2026",
    sparkline: [6580462, 6555283, 6552419, 6535781, 6539303, 6556861, 6581231, 6640618, 6573602, 6581700, 6584580, 6587568, 6605909, 6622382, 6613395, 6613797, 6628894, 6646344, 6655939, 6657161, 6675344, 6693871, 6705696, 6707419],
  },
  {
    title: "Consumer Prices",
    value: "3.3%",
    context: "Official CPI, year over year · +27.5% vs. Jan 2020",
    interpretation:
      "The latest annual inflation print looks calmer than 2022, but the accumulated rise since 2020 is still large enough to keep grinding wages and savings.",
    sourceLabel: "FRED · CPIAUCSL",
    sourceUrl: "https://fred.stlouisfed.org/series/CPIAUCSL",
    publishedAt: "Mar 2026",
    sparkline: [312.345, 313.023, 313.175, 313.044, 313.569, 314.062, 314.732, 315.631, 316.528, 317.604, 318.961, 319.679, 319.785, 320.302, 320.62, 321.435, 322.169, 323.291, 324.245, 325.063, 326.031, 326.588, 327.46, 330.293],
  },
  {
    title: "Shelter Costs",
    value: "3.0%",
    context: "Shelter CPI, year over year · +31.1% vs. Jan 2020",
    interpretation:
      "Housing pressure has not broken. Shelter continues to keep the household cost floor elevated even when other categories cool.",
    sourceLabel: "FRED · CUSR0000SAH1",
    sourceUrl: "https://fred.stlouisfed.org/series/CUSR0000SAH1",
    publishedAt: "Mar 2026",
    sparkline: [395.827, 397.196, 398.689, 399.699, 401.139, 402.895, 403.956, 405.721, 407.114, 408.165, 409.579, 410.793, 411.639, 413.04, 414.109, 414.981, 415.931, 417.555, 418.422, 419.431, 421.039, 421.965, 422.942, 424.069],
  },
  {
    title: "Energy Pressure",
    value: "12.6%",
    context: "Energy CPI, year over year · +42.6% vs. Jan 2020",
    interpretation:
      "Energy remains the most visibly volatile pressure point. It transmits quickly into transport, utilities, and sentiment.",
    sourceLabel: "FRED · CPIENGSL",
    sourceUrl: "https://fred.stlouisfed.org/series/CPIENGSL",
    publishedAt: "Mar 2026",
    sparkline: [288.688, 287.611, 284.165, 278.284, 278.287, 275.706, 272.681, 273.003, 273.281, 279.829, 282.272, 282.096, 278.906, 277.343, 275.377, 276.558, 274.85, 276.734, 280.7, 284.648, 285.624, 281.436, 283.223, 314.019],
  },
  {
    title: "Dollar Purchasing Power",
    value: "−21.5%",
    context: "CPI-adjusted buying power lost since Jan 2020",
    interpretation:
      "By the CPI measure, one dollar held since January 2020 now buys only about 78 cents of the same basket. Slow erosion is still erosion.",
    sourceLabel: "FRED · CPIAUCSL",
    sourceUrl: "https://fred.stlouisfed.org/series/CPIAUCSL",
    publishedAt: "Mar 2026",
    sparkline: [82.962, 82.782, 82.742, 82.777, 82.638, 82.508, 82.333, 82.098, 81.865, 81.588, 81.241, 81.058, 81.032, 80.901, 80.821, 80.616, 80.432, 80.153, 79.917, 79.716, 79.479, 79.344, 79.132, 78.454],
  },
];

function subtractYear(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00Z`);
  date.setUTCFullYear(date.getUTCFullYear() - 1);
  return date.toISOString().slice(0, 10);
}

function formatPublishedDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

function formatPercent(value: number, digits = 1) {
  return `${value >= 0 ? "+" : "−"}${Math.abs(value).toFixed(digits)}%`;
}

function formatTrillionsFromBillions(value: number) {
  return `$${(value / 1000).toFixed(1)}T`;
}

function formatTrillionsFromMillions(value: number) {
  return `$${(value / 1_000_000).toFixed(1)}T`;
}

async function getLiveCards(): Promise<LiveDataCardData[]> {
  try {
    const [m2, balanceSheet, cpi, shelter, energy] = await Promise.all([
      fetchFredSeries("WM2NS"),
      fetchFredSeries("WALCL"),
      fetchFredSeries("CPIAUCSL"),
      fetchFredSeries("CUSR0000SAH1"),
      fetchFredSeries("CPIENGSL"),
    ]);

    const baselineDate = "2020-01-31";

    const m2Latest = latestObservation(m2);
    const m2Baseline = findObservationAtOrBefore(m2, baselineDate);
    const m2YearAgo = findObservationAtOrBefore(m2, subtractYear(m2Latest.date));

    const balanceLatest = latestObservation(balanceSheet);
    const balanceBaseline = findObservationAtOrBefore(balanceSheet, baselineDate);

    const cpiLatest = latestObservation(cpi);
    const cpiBaseline = findObservationAtOrBefore(cpi, baselineDate);
    const cpiYearAgo = findObservationAtOrBefore(cpi, subtractYear(cpiLatest.date));

    const shelterLatest = latestObservation(shelter);
    const shelterBaseline = findObservationAtOrBefore(shelter, baselineDate);
    const shelterYearAgo = findObservationAtOrBefore(shelter, subtractYear(shelterLatest.date));

    const energyLatest = latestObservation(energy);
    const energyBaseline = findObservationAtOrBefore(energy, baselineDate);
    const energyYearAgo = findObservationAtOrBefore(energy, subtractYear(energyLatest.date));

    if (
      !m2Baseline ||
      !m2YearAgo ||
      !balanceBaseline ||
      !cpiBaseline ||
      !cpiYearAgo ||
      !shelterBaseline ||
      !shelterYearAgo ||
      !energyBaseline ||
      !energyYearAgo
    ) {
      throw new Error("Missing baseline observations for one or more series.");
    }

    const m2Since2020 = percentChange(m2Latest.value, m2Baseline.value);
    const balanceSince2020 = percentChange(balanceLatest.value, balanceBaseline.value);
    const cpiSince2020 = percentChange(cpiLatest.value, cpiBaseline.value);
    const cpiYearOverYear = percentChange(cpiLatest.value, cpiYearAgo.value);
    const shelterSince2020 = percentChange(shelterLatest.value, shelterBaseline.value);
    const shelterYearOverYear = percentChange(shelterLatest.value, shelterYearAgo.value);
    const energySince2020 = percentChange(energyLatest.value, energyBaseline.value);
    const energyYearOverYear = percentChange(energyLatest.value, energyYearAgo.value);
    const purchasingPowerRemaining = (cpiBaseline.value / cpiLatest.value) * 100;
    const purchasingPowerLost = 100 - purchasingPowerRemaining;

    return [
      {
        title: "M2 Money Supply",
        value: formatTrillionsFromBillions(m2Latest.value),
        context: `Weekly money stock · ${formatPercent(m2Since2020)} vs. Jan 2020`,
        interpretation:
          "The emergency surge has partially retraced, but the stock of money is still far above its pre-2020 level.",
        sourceLabel: "FRED · WM2NS",
        sourceUrl: "https://fred.stlouisfed.org/series/WM2NS",
        publishedAt: formatPublishedDate(m2Latest.date),
        sparkline: lastNValues(m2, 24),
      },
      {
        title: "Fed Balance Sheet",
        value: formatTrillionsFromMillions(balanceLatest.value),
        context: `Federal Reserve assets · ${formatPercent(balanceSince2020)} vs. Jan 2020`,
        interpretation:
          "The balance sheet is below its crisis peak, but the post-2020 expansion was never fully unwound.",
        sourceLabel: "FRED · WALCL",
        sourceUrl: "https://fred.stlouisfed.org/series/WALCL",
        publishedAt: formatPublishedDate(balanceLatest.date),
        sparkline: lastNValues(balanceSheet, 24),
      },
      {
        title: "Consumer Prices",
        value: `${Math.abs(cpiYearOverYear).toFixed(1)}%`,
        context: `Official CPI, year over year · ${formatPercent(cpiSince2020)} vs. Jan 2020`,
        interpretation:
          "The monthly pace is slower than the 2022 spike, but the accumulated rise since 2020 still compounds against wages and savings.",
        sourceLabel: "FRED · CPIAUCSL",
        sourceUrl: "https://fred.stlouisfed.org/series/CPIAUCSL",
        publishedAt: formatPublishedDate(cpiLatest.date),
        sparkline: lastNValues(cpi, 24),
      },
      {
        title: "Shelter Costs",
        value: `${Math.abs(shelterYearOverYear).toFixed(1)}%`,
        context: `Shelter CPI, year over year · ${formatPercent(shelterSince2020)} vs. Jan 2020`,
        interpretation:
          "Housing remains a stubborn pressure point. Shelter keeps the everyday cost floor high even when other categories cool.",
        sourceLabel: "FRED · CUSR0000SAH1",
        sourceUrl: "https://fred.stlouisfed.org/series/CUSR0000SAH1",
        publishedAt: formatPublishedDate(shelterLatest.date),
        sparkline: lastNValues(shelter, 24),
      },
      {
        title: "Energy Pressure",
        value: `${Math.abs(energyYearOverYear).toFixed(1)}%`,
        context: `Energy CPI, year over year · ${formatPercent(energySince2020)} vs. Jan 2020`,
        interpretation:
          "Energy is still the fastest-moving pressure channel. It works through transport, utilities, and household expectations.",
        sourceLabel: "FRED · CPIENGSL",
        sourceUrl: "https://fred.stlouisfed.org/series/CPIENGSL",
        publishedAt: formatPublishedDate(energyLatest.date),
        sparkline: lastNValues(energy, 24),
      },
      {
        title: "Dollar Purchasing Power",
        value: `−${purchasingPowerLost.toFixed(1)}%`,
        context: "CPI-adjusted buying power lost since Jan 2020",
        interpretation: `By the CPI measure, one dollar held since January 2020 now buys about ${purchasingPowerRemaining.toFixed(0)} cents of the same basket.`,
        sourceLabel: "FRED · CPIAUCSL",
        sourceUrl: "https://fred.stlouisfed.org/series/CPIAUCSL",
        publishedAt: formatPublishedDate(cpiLatest.date),
        sparkline: cpi.slice(-24).map((point) => (cpiBaseline.value / point.value) * 100),
      },
    ];
  } catch {
    return fallbackLiveCards;
  }
}

export default async function DataPage() {
  const liveCards = await getLiveCards();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <section className="border-b border-stone-200 pb-14 md:pb-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.75fr)_minmax(260px,0.85fr)] lg:items-start">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-stone-500">
              Data repository
            </p>
            <h1 className="max-w-4xl font-display text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
              Current conditions, comparison material, and longer reference points.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-stone-700">
              Start with the live layer. The aim is a readable first pass on monetary expansion,
              household pressure, and purchasing-power loss before the slower archival notes below.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
              This page is meant to be reviewed first. If the evidence feels coherent enough to keep
              testing, continue to{" "}
              <Link
                href="/paper"
                className="text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-900"
              >
                the paper
              </Link>
              .
            </p>
          </div>

          <aside className="lg:border-l lg:border-stone-200 lg:pl-8">
            <div className="border-t border-stone-300 pt-5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
                Reading order
              </p>
              <ol className="mt-5 space-y-5 text-sm leading-7 text-stone-600">
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-stone-400">01</span>
                  <span>Scan the live series for the present pressure points.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-stone-400">02</span>
                  <span>Open the FRED links and inspect the underlying series directly.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-xs text-stone-400">03</span>
                  <span>Use the deeper notes to connect the live layer to the larger thesis.</span>
                </li>
              </ol>
            </div>
            <div className="mt-8 bg-stone-100/80 px-5 py-5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
                Refresh cadence
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                The page revalidates periodically, but the weekly and monthly series still move on the
                release schedule of the underlying public data.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-stone-200 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(240px,0.8fr)] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-stone-500">
              Current conditions
            </p>
            <h2 className="font-display text-3xl font-semibold text-stone-900">
              A live first pass on monetary expansion and household pressure.
            </h2>
            <p className="mt-4 text-base leading-8 text-stone-600">
              Public FRED series only. No heavy charting, no dashboard theatrics — just enough live
              signal to orient a careful reader quickly.
            </p>
          </div>

          <div className="border-t border-stone-200 pt-5">
            <dl className="space-y-4 text-sm leading-7 text-stone-600">
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
                  Live layer
                </dt>
                <dd>Money stock, Fed assets, CPI, shelter, energy, and purchasing power.</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
                  Source base
                </dt>
                <dd>Public FRED releases with direct source links on every card.</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {liveCards.map((card) => (
            <LiveDataCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="border-b border-stone-200 py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-stone-500">
            Comparison layer
          </p>
          <h2 className="font-display text-3xl font-semibold text-stone-900">
            Official CPI and Chapwood are related, but not interchangeable.
          </h2>
          <p className="mt-4 text-base leading-8 text-stone-600">
            The point is not to collapse the measures into one story. It is to show how an official
            national series and a more lived cost frame can describe different parts of the same
            pressure field.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(220px,0.8fr)] lg:gap-12">
          {chapwoodComparison.map((item) => (
            <article key={item.title} className="border-t border-stone-200 pt-5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
                {item.sourceLabel}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-stone-900">{item.title}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-600">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block text-sm font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-900"
              >
                Open source →
              </a>
            </article>
          ))}

          <aside className="bg-stone-100/80 px-5 py-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-500">
              How to read the gap
            </p>
            <ol className="mt-5 space-y-4 text-sm leading-7 text-stone-600">
              <li className="flex gap-3">
                <span className="font-mono text-xs text-stone-400">01</span>
                <span>Use FRED first for stable, inspectable official series.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-xs text-stone-400">02</span>
                <span>Use Chapwood as a second lens when you want a more lived cost frame.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-xs text-stone-400">03</span>
                <span>The tension between the two is part of the evidence, not a bug to hide.</span>
              </li>
            </ol>
          </aside>
        </div>
      </section>

      <section className="border-b border-stone-200 py-14 md:py-16">
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {readingNotes.map((note) => (
            <article key={note.label} className="border-t border-stone-200 pt-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">{note.label}</p>
              <p className="mt-3 text-sm leading-7 text-stone-600">{note.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(220px,0.8fr)] lg:items-start">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-stone-500">
              Deeper reference points
            </p>
            <h2 className="font-display text-3xl font-semibold text-stone-900">
              The archival layer stays below the fold.
            </h2>
            <p className="mt-4 text-base leading-8 text-stone-600">
              These longer anchor claims give the thesis historical depth. The presentation is quieter on
              purpose: less dashboard, more report.
            </p>
          </div>

          <aside className="border-t border-stone-200 pt-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
              Archive use
            </p>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              Review these when you want the slower context behind the live cards: long-run dilution,
              purchasing-power loss, wage divergence, and cumulative inflation.
            </p>
          </aside>
        </div>

        <div className="mt-12 space-y-12">
          {datasets.map((d, index) => (
            <article key={d.title} className="border-t border-stone-200 pt-8 md:pt-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(220px,0.75fr)] lg:gap-12">
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
                    <span>{`Reference ${String(index + 1).padStart(2, "0")}`}</span>
                    <span className="hidden h-1 w-1 rounded-full bg-stone-300 sm:inline-block" />
                    <span>{d.period}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-stone-900 md:text-3xl">
                    {d.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-stone-700">{d.detail}</p>
                  <p className="mt-6 border-l-2 border-stone-200 pl-5 text-sm italic leading-7 text-stone-600">
                    <span className="font-medium not-italic text-stone-700">Implication.</span>{" "}
                    {d.implication}
                  </p>
                </div>

                <div className="lg:pt-1">
                  <p className="font-display text-4xl font-semibold text-stone-900 md:text-[2.75rem]">
                    {d.value}
                  </p>
                  <dl className="mt-6 space-y-4 border-t border-stone-200 pt-5 text-sm leading-7">
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
                        Period
                      </dt>
                      <dd className="mt-1 text-stone-700">{d.period}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
                        Source
                      </dt>
                      <dd className="mt-1 text-stone-700">
                        <a
                          href={d.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-900"
                        >
                          {d.source}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-stone-200 pt-8">
          <p className="max-w-3xl text-sm leading-7 text-stone-600">
            <span className="font-medium text-stone-700">A note on sources.</span>{" "}
            The live section uses public FRED endpoints, so freshness is limited by the release cadence of
            the underlying weekly and monthly series. The deeper notes still rely on broader historical
            and interpretive sources. Even by the official metrics, the scale of purchasing-power
            destruction is hard to dismiss.
          </p>
        </div>
      </section>
    </div>
  );
}

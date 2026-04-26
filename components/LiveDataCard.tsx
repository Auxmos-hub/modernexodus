import Sparkline from "@/components/Sparkline";

export interface LiveDataCardData {
  title: string;
  value: string;
  context: string;
  interpretation: string;
  sourceLabel: string;
  sourceUrl: string;
  publishedAt: string;
  sparkline: number[];
}

export default function LiveDataCard({
  title,
  value,
  context,
  interpretation,
  sourceLabel,
  sourceUrl,
  publishedAt,
  sparkline,
}: LiveDataCardData) {
  return (
    <article className="border-t border-stone-300 bg-stone-50/70 px-5 pb-5 pt-4 md:px-6 md:pb-6 md:pt-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
            Live series
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-stone-900">{title}</h3>
        </div>
        <p className="text-right font-display text-3xl font-semibold text-stone-900">{value}</p>
      </div>

      <p className="mt-3 text-sm leading-6 text-stone-500">{context}</p>

      <div className="mt-5 border-y border-stone-200 py-4">
        <Sparkline points={sparkline} label={`${title} recent trend`} />
      </div>

      <p className="mt-5 text-sm leading-7 text-stone-700">{interpretation}</p>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 pt-4 text-xs text-stone-400">
        <a
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="text-stone-500 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-900"
        >
          Source: {sourceLabel}
        </a>
        <span>Latest published: {publishedAt}</span>
      </div>
    </article>
  );
}

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
    <article className="border border-stone-200 bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
            Current conditions
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-stone-900">
            {title}
          </h3>
        </div>
        <p className="font-display text-3xl font-semibold text-stone-900 text-right">
          {value}
        </p>
      </div>

      <p className="mt-3 text-sm text-stone-500">{context}</p>

      <div className="mt-5 border-y border-stone-100 py-4">
        <Sparkline points={sparkline} label={`${title} recent trend`} />
      </div>

      <p className="mt-5 text-sm leading-relaxed text-stone-600">{interpretation}</p>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 pt-4 text-xs text-stone-400">
        <a
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-stone-300 underline-offset-2 hover:text-stone-700"
        >
          Source: {sourceLabel}
        </a>
        <span>Latest published: {publishedAt}</span>
      </div>
    </article>
  );
}

interface DataWidgetProps {
  label: string;
  sublabel: string;
  value: string;
  description: string;
  source: string;
}

export default function DataWidget({
  label,
  sublabel,
  value,
  description,
  source,
}: DataWidgetProps) {
  return (
    <div className="border border-stone-200 p-6 bg-white">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs font-medium text-stone-400 uppercase tracking-wider">
            {label}
          </p>
          <p className="text-xs text-stone-300 mt-0.5">{sublabel}</p>
        </div>
        <span className="font-display text-2xl font-semibold text-stone-900">
          {value}
        </span>
      </div>
      <p className="text-sm text-stone-500 leading-relaxed">{description}</p>
      <p className="text-xs text-stone-300 mt-4">Source: {source}</p>
    </div>
  );
}

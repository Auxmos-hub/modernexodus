interface SparklineProps {
  points: number[];
  label: string;
}

function buildPath(points: number[]) {
  if (points.length === 0) {
    return "";
  }

  const width = 100;
  const height = 32;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;

  return points
    .map((point, index) => {
      const x = (index / Math.max(points.length - 1, 1)) * width;
      const y = height - ((point - min) / range) * height;
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

function buildArea(points: number[]) {
  if (points.length === 0) {
    return "";
  }

  const width = 100;
  const height = 32;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const path = points
    .map((point, index) => {
      const x = (index / Math.max(points.length - 1, 1)) * width;
      const y = height - ((point - min) / range) * height;
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");

  return `${path} L100 ${height} L0 ${height} Z`;
}

export default function Sparkline({ points, label }: SparklineProps) {
  const linePath = buildPath(points);
  const areaPath = buildArea(points);

  return (
    <svg
      viewBox="0 0 100 32"
      preserveAspectRatio="none"
      className="h-16 w-full"
      role="img"
      aria-label={label}
    >
      <path d={areaPath} fill="rgba(41, 37, 36, 0.08)" />
      <path
        d={linePath}
        fill="none"
        stroke="#44403c"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

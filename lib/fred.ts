const FRED_GRAPH_URL = "https://fred.stlouisfed.org/graph/fredgraph.csv?id=";

export interface FredObservation {
  date: string;
  value: number;
}

export async function fetchFredSeries(seriesId: string): Promise<FredObservation[]> {
  const response = await fetch(`${FRED_GRAPH_URL}${seriesId}`, {
    next: { revalidate: 21600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch FRED series ${seriesId}: ${response.status}`);
  }

  const csv = await response.text();
  return parseFredCsv(csv, seriesId);
}

export function parseFredCsv(csv: string, seriesId: string): FredObservation[] {
  return csv
    .trim()
    .split(/\r?\n/)
    .slice(1)
    .map((line) => {
      const [date, rawValue] = line.split(",");
      const value = rawValue?.trim();

      if (!date || !value || value === ".") {
        return null;
      }

      const numericValue = Number(value);
      if (Number.isNaN(numericValue)) {
        return null;
      }

      return { date, value: numericValue };
    })
    .filter((point): point is FredObservation => point !== null);
}

export function findObservationAtOrBefore(
  observations: FredObservation[],
  targetDate: string,
): FredObservation | null {
  for (let index = observations.length - 1; index >= 0; index -= 1) {
    if (observations[index].date <= targetDate) {
      return observations[index];
    }
  }

  return null;
}

export function latestObservation(observations: FredObservation[]): FredObservation {
  const latest = observations[observations.length - 1];

  if (!latest) {
    throw new Error("No observations available.");
  }

  return latest;
}

export function percentChange(current: number, previous: number): number {
  return ((current - previous) / previous) * 100;
}

export function lastNValues(observations: FredObservation[], count: number): number[] {
  return observations.slice(-count).map((point) => point.value);
}

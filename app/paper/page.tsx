import { readFileSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

export const metadata = {
  title: "The Paper",
  description:
    "A Modern Exodus by Austin Morrow. An exposition of the Exodus narrative as it maps onto present-day systemic oppression.",
};

type TextBlock = {
  type: "text";
  text: string;
};

type FigureBlock = {
  type: "figure";
  src: string;
  alt: string;
  url: string;
};

type Block = TextBlock | FigureBlock;

type SectionData = {
  id: string;
  title: string;
  blocks: Block[];
};

const SECTION_TITLES = [
  "Preface",
  "The Lord Remembers",
  "Assurance and Encouragement",
  "“Let my people go.”",
  "Pharaoh's Hardened Heart",
  "A Time for War",
  "The Modern Day Pharaoh",
  "Forced Labor",
  "Money",
  "Purchasing Power",
  "Inflation",
  "Labor Then; Labor Now",
  "Attention",
  "It Can’t Be That Bad",
  "Bringing It Home",
  "The Lord Sees",
  "The Printing Press",
  "Idols and Arks",
  "Connecting The Dots",
  "Plundering the Egyptians",
  "Providence",
  "Decisions",
  "Building A Dwelling Place",
  "Bitcoin",
  "Conclusion",
] as const;

const FIGURE_RULES: Record<string, Array<Omit<FigureBlock, "type"> & { pattern: RegExp }>> = {
  Inflation: [
    {
      pattern: /https:\/\/www\.visualcapitalist\.com\/purchasing-power-of-the-u-s-dollar-over-time/g,
      src: "/paper/img-001.png",
      alt: "A Dollar's Worth — purchasing power of the U.S. dollar over time",
      url: "https://www.visualcapitalist.com/purchasing-power-of-the-u-s-dollar-over-time",
    },
  ],
  "Labor Then; Labor Now": [
    {
      pattern:
        /https:\/\/www\.epi\.org\/publication\/charting-wage-stagnation\/#:[\s\S]*?productivity%20of%20the%20total%20economy/g,
      src: "/paper/img-002.png",
      alt: "Workers produced much more, but typical workers' pay lagged far behind",
      url:
        "https://www.epi.org/publication/charting-wage-stagnation/#:~:text=Workers%20produced%20much%20more%2C%20but,typical%20worker%27s%20compensation%2C%201948–2013&text=Note%3A%20Data%20are%20for%20compensation,productivity%20of%20the%20total%20economy",
    },
  ],
  "It Can’t Be That Bad": [
    {
      pattern: /https:\/\/fred\.stlouisfed\.org\/graph\/\?g=ANNk/g,
      src: "/paper/img-003.png",
      alt: "Consumer Price Index for All Urban Consumers",
      url: "https://fred.stlouisfed.org/graph/?g=ANNk",
    },
    {
      pattern:
        /https:\/\/inflationdata\.com\/articles\/2022\/08\/10\/u-s-cumulative-inflation-since-1913/g,
      src: "/paper/img-004.png",
      alt: "Cumulative inflation 1913 to 2022",
      url: "https://inflationdata.com/articles/2022/08/10/u-s-cumulative-inflation-since-1913",
    },
  ],
  "Bringing It Home": [
    {
      pattern: /https:\/\/fred\.stlouisfed\.org\/series\/WM2NS\/#/g,
      src: "/paper/img-005.png",
      alt: "M2 money supply",
      url: "https://fred.stlouisfed.org/series/WM2NS/#",
    },
  ],
};

const sections = getSections();

export default function PaperPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="border-b border-stone-200 pb-12 mb-12">
        <h1 className="font-display text-5xl font-semibold text-stone-900 mb-4">A Modern Exodus</h1>
        <p className="text-stone-500 text-lg">By Austin Morrow</p>
      </div>

      <div className="prose-custom">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="mb-16 scroll-mt-20">
            <h2>{section.title}</h2>
            {section.blocks.map((block, index) =>
              block.type === "text" ? (
                <TextBlockView key={`${section.id}-text-${index}`} text={block.text} />
              ) : (
                <figure key={`${section.id}-figure-${index}`} className="my-10">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={1400}
                    height={900}
                    className="w-full h-auto border border-stone-200"
                  />
                  <figcaption className="mt-3 text-xs text-stone-500 break-all">
                    <a
                      href={block.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-stone-800 transition-colors"
                    >
                      {block.url}
                    </a>
                  </figcaption>
                </figure>
              ),
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

function TextBlockView({ text }: { text: string }) {
  const paragraphs = text
    .split(/\n\s*\n/g)
    .map((paragraph) => paragraph.split("\n").map((line) => line.trim()).join(" ").trim())
    .filter(Boolean);

  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>
      ))}
    </>
  );
}

function getSections(): SectionData[] {
  const source = loadSource();
  const lines = source.split("\n");
  const sectionsFromSource: Array<{ title: string; lines: string[] }> = [];
  let current: { title: string; lines: string[] } | null = null;

  for (const line of lines) {
    const trimmed = line.trim();

    if (!current && (trimmed === "A Modern Exodus" || trimmed === "By Austin Morrow")) {
      continue;
    }

    if ((SECTION_TITLES as readonly string[]).includes(trimmed)) {
      if (current) {
        sectionsFromSource.push(current);
      }

      current = { title: trimmed, lines: [] };
      continue;
    }

    if (current) {
      current.lines.push(line.replace(/^\s/, "").replace(/\s+$/, ""));
    }
  }

  if (current) {
    sectionsFromSource.push(current);
  }

  return sectionsFromSource.map(({ title, lines }) => ({
    id: slugify(title),
    title,
    blocks: buildBlocks(title, lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()),
  }));
}

function buildBlocks(title: string, text: string): Block[] {
  const rules = FIGURE_RULES[title] ?? [];
  let blocks: Block[] = [{ type: "text", text }];

  for (const rule of rules) {
    const nextBlocks: Block[] = [];

    for (const block of blocks) {
      if (block.type === "figure") {
        nextBlocks.push(block);
        continue;
      }

      let remaining = block.text;
      let matched = false;
      rule.pattern.lastIndex = 0;
      const match = rule.pattern.exec(remaining);

      if (!match) {
        nextBlocks.push(block);
        continue;
      }

      matched = true;
      const before = remaining.slice(0, match.index).trim();
      const after = remaining.slice(match.index + match[0].length).trim();

      if (before) {
        nextBlocks.push({ type: "text", text: before });
      }

      nextBlocks.push({ type: "figure", src: rule.src, alt: rule.alt, url: rule.url });

      if (after) {
        nextBlocks.push({ type: "text", text: after });
      }

      if (!matched) {
        nextBlocks.push(block);
      }
    }

    blocks = nextBlocks;
  }

  return blocks;
}

function loadSource() {
  const sourcePath = path.join(process.cwd(), "content", "Modern Exodus.extracted.txt");
  const raw = readFileSync(sourcePath, "utf8");
  const pages = raw
    .split(/\n\s*===== PAGE \d+ =====\s*\n/g)
    .map((page) => page.replace(/^\s+|\s+$/g, ""))
    .filter(Boolean);

  return applyPdfFidelityCorrections(pages.join("\n"));
}

function applyPdfFidelityCorrections(source: string) {
  return [
    [
      "The message to the Israeites is one of assurance and encouragement.",
      "The message to the Israelites is one of assurance and encouragement.",
    ],
    [
      "The Israeiltes were so moved by the simple reality",
      "The Israelites were so moved by the simple reality",
    ],
    [
      "the same can be said here concerning the Israeiltes and the Egyptians.",
      "the same can be said here concerning the Israelites and the Egyptians.",
    ],
    [
      "the Isrealites would be too powerless and despondent to muster up",
      "the Israelites would be too powerless and despondent to muster up",
    ],
    ["“Modern Exodus'' story", "“Modern Exodus” story"],
  ].reduce((text, [from, to]) => text.replaceAll(from, to), source);
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

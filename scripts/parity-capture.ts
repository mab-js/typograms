#!/usr/bin/env tsx
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";
import { renderToString } from "../src/headless.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const REPO_ROOT = path.resolve(__dirname, "..");
const SOURCES = [
  path.join(REPO_ROOT, "docs", "index.html"),
  path.join(REPO_ROOT, "docs", "test.html"),
];
const FIXTURES_DIR = path.join(REPO_ROOT, "tests", "fixtures");

interface Entry {
  baseName: string;
  name?: string;
  source: string;
  zoom: number;
  debug: boolean;
  origin: string;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function extractEntries(htmlPath: string): Entry[] {
  const html = fs.readFileSync(htmlPath, "utf8");
  const dom = new JSDOM(html);
  const doc = dom.window.document;
  const nodes = doc.querySelectorAll(
    'h1, h2, h3, h4, h5, h6, script[type="text/typogram"]'
  );

  const fileStem = path.basename(htmlPath, path.extname(htmlPath));
  let currentHeading: Element | null = null;
  const entries: Entry[] = [];

  for (const node of nodes) {
    if (/^H[1-6]$/.test(node.tagName)) {
      currentHeading = node;
      continue;
    }
    if (node.hasAttribute("disabled")) continue;

    const source = node.textContent ?? "";
    const zoomAttr = node.getAttribute("zoom");
    const zoom = Number(zoomAttr ?? 0.3);
    const debug = node.hasAttribute("grid");

    let baseName: string;
    if (currentHeading) {
      const text = (currentHeading.textContent ?? "").trim();
      baseName = currentHeading.id || slugify(text) || fileStem;
    } else {
      baseName = fileStem;
    }

    entries.push({
      baseName,
      source,
      zoom,
      debug,
      origin: `docs/${path.basename(htmlPath)}${
        currentHeading?.id ? `#${currentHeading.id}` : ""
      }`,
    });
  }
  return entries;
}

function assignUniqueNames(entries: Entry[]): void {
  const counts = new Map<string, number>();
  for (const e of entries) counts.set(e.baseName, (counts.get(e.baseName) ?? 0) + 1);

  const seen = new Map<string, number>();
  for (const e of entries) {
    if (counts.get(e.baseName) === 1) {
      e.name = e.baseName;
    } else {
      const n = (seen.get(e.baseName) ?? 0) + 1;
      seen.set(e.baseName, n);
      e.name = `${e.baseName}-${String(n).padStart(2, "0")}`;
    }
  }
}

function writeFixture(entry: Entry): void {
  if (!entry.name) throw new Error(`entry missing name: ${entry.baseName}`);
  const dir = path.join(FIXTURES_DIR, entry.name);
  fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(path.join(dir, "source.txt"), entry.source);

  const meta = {
    zoom: entry.zoom,
    debug: entry.debug,
    origin: entry.origin,
  };
  fs.writeFileSync(
    path.join(dir, "meta.json"),
    JSON.stringify(meta, null, 2) + "\n"
  );

  const svg = renderToString(entry.source, entry.zoom, entry.debug);
  fs.writeFileSync(path.join(dir, "expected.svg"), svg);
}

function main(): void {
  fs.mkdirSync(FIXTURES_DIR, { recursive: true });

  const allEntries: Entry[] = [];
  for (const src of SOURCES) {
    if (!fs.existsSync(src)) {
      console.warn(`skipping missing source: ${src}`);
      continue;
    }
    allEntries.push(...extractEntries(src));
  }

  assignUniqueNames(allEntries);

  for (const entry of allEntries) {
    writeFixture(entry);
    console.log(`wrote ${entry.name} (origin: ${entry.origin})`);
  }

  console.log(`\nCaptured ${allEntries.length} fixtures.`);
}

main();

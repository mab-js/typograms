import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { renderFixture } from "./render.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FIXTURES_DIR = path.resolve(__dirname, "..", "fixtures");

interface FixtureMeta {
  zoom: number;
  debug: boolean;
}

function listFixtures(): string[] {
  if (!fs.existsSync(FIXTURES_DIR)) return [];
  return fs
    .readdirSync(FIXTURES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
}

describe("parity (upstream snapshot)", () => {
  const fixtures = listFixtures();

  if (fixtures.length === 0) {
    it("has fixtures captured", () => {
      expect.fail(
        `No fixtures found under ${FIXTURES_DIR}. Run "node scripts/parity-capture.js".`
      );
    });
    return;
  }

  for (const name of fixtures) {
    it(name, () => {
      const dir = path.join(FIXTURES_DIR, name);
      const source = fs.readFileSync(path.join(dir, "source.txt"), "utf8");
      const meta: FixtureMeta = JSON.parse(fs.readFileSync(path.join(dir, "meta.json"), "utf8"));
      const expected = fs.readFileSync(path.join(dir, "expected.svg"), "utf8");

      const actual = renderFixture({
        source,
        zoom: meta.zoom,
        debug: meta.debug,
      });

      if (actual !== expected) {
        const actualPath = path.join(dir, "actual.svg");
        fs.writeFileSync(actualPath, actual);
        expect.fail(
          `Parity mismatch in fixture "${name}".\n` +
            `  expected: ${path.relative(process.cwd(), path.join(dir, "expected.svg"))}\n` +
            `  actual:   ${path.relative(process.cwd(), actualPath)}\n` +
            `Diff the two files to see what changed. If the change is intentional, ` +
            `regenerate via "node scripts/parity-capture.js".`
        );
      }
    });
  }
});

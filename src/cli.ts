#!/usr/bin/env node
/*
 * typograms (mab-js fork)
 *
 * Copyright 2017-2025 Google LLC
 * Modifications Copyright 2026 Matthew Burton
 *
 * Originally developed by Google (google/typograms, archived 2025-01-21).
 * Licensed under the Apache License, Version 2.0.
 * See LICENSE and NOTICE at the repository root.
 */

/**
 * CLI entry: read a typogram source from a file or stdin, render it to SVG,
 * write the result to stdout or a `-o` path.
 *
 * Unlike `create()`, the CLI renders the source as authored — the first and
 * last lines are preserved. This is achieved by padding the input with a
 * leading and trailing newline before handing it to `create()`, which itself
 * drops the first and last line (an upstream parity quirk inherited from the
 * `<script type="text/typogram">` convention).
 *
 * @packageDocumentation
 */

import fs from "node:fs";
import { parseArgs } from "node:util";
import { renderToString } from "./headless.js";

const USAGE = `Usage: typograms [file] [options]

Render a typogram (ASCII-art diagram) to SVG.

Positional:
  file                  Source file (default: stdin)

Options:
  -o, --output PATH     Write SVG to PATH (default: stdout)
  -z, --zoom NUMBER     Output scale multiplier (default: 0.3)
  -g, --grid            Overlay alignment grid and reserved-character glyphs
  -h, --help            Show this help and exit
  -v, --version         Show version and exit
`;

const VERSION = "0.2.0";

function fail(message: string): never {
  process.stderr.write(`typograms: ${message}\n`);
  process.exit(1);
}

async function readStdin(): Promise<string> {
  const chunks: Buffer[] = [];
  for await (const chunk of process.stdin) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

async function main(): Promise<void> {
  let parsed;
  try {
    parsed = parseArgs({
      allowPositionals: true,
      options: {
        output: { type: "string", short: "o" },
        zoom: { type: "string", short: "z" },
        grid: { type: "boolean", short: "g" },
        help: { type: "boolean", short: "h" },
        version: { type: "boolean", short: "v" },
      },
    });
  } catch (err) {
    fail((err as Error).message);
  }

  const { values, positionals } = parsed;

  if (values.help) {
    process.stdout.write(USAGE);
    return;
  }
  if (values.version) {
    process.stdout.write(`${VERSION}\n`);
    return;
  }

  if (positionals.length > 1) {
    fail(`expected at most one file argument, got ${positionals.length}`);
  }

  let zoom = 0.3;
  if (values.zoom !== undefined) {
    const parsedZoom = Number(values.zoom);
    if (!Number.isFinite(parsedZoom)) {
      fail(`--zoom expects a number, got "${values.zoom}"`);
    }
    zoom = parsedZoom;
  }

  const debug = values.grid === true;

  const file = positionals[0];
  let source: string;
  if (file !== undefined) {
    try {
      source = fs.readFileSync(file, "utf8");
    } catch (err) {
      fail((err as Error).message);
    }
  } else if (process.stdin.isTTY) {
    process.stderr.write(USAGE);
    process.exit(1);
  } else {
    source = await readStdin();
  }

  // Strip a single trailing newline (POSIX convention) so that a file with
  // N visible lines renders to N rows after `create()`'s drop-first-and-last
  // is neutralized by the padding below.
  const normalized = source.endsWith("\n") ? source.slice(0, -1) : source;
  const padded = `\n${normalized}\n`;
  const svg = renderToString(padded, zoom, debug);

  if (values.output !== undefined) {
    try {
      fs.writeFileSync(values.output, svg);
    } catch (err) {
      fail((err as Error).message);
    }
  } else {
    process.stdout.write(svg);
  }
}

main().catch((err: unknown) => {
  fail((err as Error).message ?? String(err));
});

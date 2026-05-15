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
 * Entry point for the typograms renderer. Composes three internal modules:
 *
 *   - `./grid` provides the {@link Diagram} grid model and the `around`
 *     neighbor helper.
 *   - `./primitives` exposes SVG construction helpers (`cross`, `text`,
 *     `debugGrid`) and the `CELL_*` cell-geometry constants.
 *   - `./glyphs` holds the per-character handler table and its aliases.
 *
 * Exposes `create()` as the default export and re-exports `Neighbors` and
 * `GlyphHandler` for consumers that want to extend the dispatch table.
 *
 * @packageDocumentation
 */

// The renderer pipes numeric coordinates and boolean flags through
// Element.setAttribute, relying on the DOM's implicit String() coercion. The
// strict lib.dom signature accepts only strings, so widen it here rather than
// wrap every one of ~200 call sites in String(...).
declare global {
  interface Element {
    setAttribute(qualifiedName: string, value: string | number | boolean): void;
  }
}

import { around, type Diagram } from "./grid.js";
import { CELL_H, CELL_W, SVG_NS, debugGrid, text } from "./primitives.js";
import { glyphs } from "./glyphs.js";

export type { Neighbors } from "./grid.js";
export type { GlyphHandler } from "./glyphs.js";

function render(diagram: Diagram): SVGGElement {
  const result = document.createElementNS(SVG_NS, "g");

  for (let y = 0; y < diagram.length; y++) {
    const row = diagram[y];
    if (!row) continue;
    for (let x = 0; x < row.length; x++) {
      const char = row[x];

      if (char === undefined || char === " " || char === '"') {
        continue;
      }

      const handler = glyphs[char];

      const g = document.createElementNS(SVG_NS, "g");

      let str = false;
      for (let i = 0; i < x; i++) {
        if (row[i] === '"') {
          str = !str;
        }
      }

      const neighbors = around(diagram, [x, y]);

      if (char.match(/[A-Za-z0-9]/)) {
        const [, right, , left] = neighbors;
        // Special-case "v", which is a down arrow and also a text character.
        str = str || /[A-Za-uw-z0-9]/.test(left) || /[A-Za-uw-z0-9]/.test(right);
      }

      const reserved = handler !== undefined && !str;

      if (reserved) {
        g.appendChild(handler(neighbors));
      }

      g.appendChild(text(char, reserved));

      g.setAttribute("transform", `translate(${x * CELL_W} ${y * CELL_H})`);
      result.appendChild(g);
    }
  }
  return result;
}

const STYLESHEET = `
.diagram {
  display: block;
}

.diagram line, .diagram circle, .diagram rect {
  stroke: black;
}

.diagram line {
  stroke-width: 2;
}

.diagram circle {
  r: 3.5;
}

.diagram rect {
  width: 6px;
  height: 6px;
}

.diagram text, .glyph, .debug text {
  /** font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace; **/
  font-family: Iosevka Fixed, monospace;
  font-size: 3em;
  text-anchor: middle;
  alignment-baseline: central;
  white-space: pre;
}

.reserved {
  fill: transparent;
  white-space: pre;
}

.debug[debug="true"] .reserved {
  fill: black;
  opacity: 0.5;
}

.debug[debug="true"] line.grid {
  stroke: black;
  stroke-width: 0.2;
  stroke-linecap: butt;
  fill: black;
  opacity: 1%;
}

polygon {
  stroke-width: 0;
}

.debug[debug="true"] polygon.inner {
  fill: black;
  stroke: black;
  opacity: 5%;
}

polygon {
  stroke: black;
  /** stroke-width: 0.2; **/
  stroke-linecap: butt;
  fill: black;
}

.debug[debug="true"] polygon,
.debug[debug="true"] line.grid
{
  opacity: 10%;
}

.debug[debug="true"] polygon,
.debug[debug="true"] path,
.debug[debug="true"] circle
{
  opacity: 50%;
}

.debug[debug="true"] polygon {
  fill: red;
  stroke: red;
}

/**
circle {
  fill: black;
}
**/

.debug[debug="true"] circle,
.debug[debug="true"] path
{
  opacity: 50%;
  fill: red;
}

.debug[debug="true"] circle {
  stroke: red;
}

.debug[debug="true"] .inner {
  stroke-width: 0.2;
}

line.part {
  stroke-width: 6;
  stroke-linecap: butt;
  stroke: black;
}

.debug[debug="true"] line.part {
  opacity: 50%;
  stroke: red;
}

.debug[debug="true"] line.center {
  stroke-width: 3;
  stroke-linecap: butt;
  opacity: 10%;
  stroke: black;
}

text::selection {
    fill: black;
    background-color: #EEE;
}
  `;

/**
 * Render a typogram source string to an SVG element.
 *
 * The first and last lines of `source` are dropped before rendering, matching
 * the upstream convention that lets authors leading-newline-pad their
 * `<script type="text/typogram">` blocks without affecting layout.
 *
 * @param source Multi-line ASCII-art diagram.
 * @param zoom Output scale multiplier; the IIFE bootstrap defaults this to 0.3.
 * @param debug When true, overlays the alignment grid and surfaces reserved
 *   characters in semi-transparent black.
 * @returns A detached `<svg>` element. Append it to a DOM target to display.
 */
function create(source: string, zoom: number, debug: boolean): SVGElement {
  const diagram: Diagram = source
    .split("\n")
    .map((line) => line.trimEnd().split(""));

  diagram.shift();
  diagram.splice(-1);

  let width = 0;
  const height = diagram.length;

  for (let y = 0; y < diagram.length; y++) {
    const row = diagram[y];
    if (!row) continue;
    for (let x = 0; x < row.length; x++) {
      if (row.length > width) {
        // Upstream parity quirk: indexes by x rather than y. Preserved
        // because the snapshot fixtures encode the resulting widths.
        width = diagram[x]?.length ?? width;
      }
    }
  }

  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("width", width * CELL_W * zoom);
  svg.setAttribute("height", height * CELL_H * zoom);
  svg.setAttribute("debug", debug);
  const padding = 0;

  svg.setAttribute("viewBox", `${-padding} ${-padding} ${width * CELL_W + 2 * padding} ${height * CELL_H + 2 * padding}`);
  svg.setAttribute("class", "debug");

  const style = document.createElementNS(SVG_NS, "style");
  style.innerHTML = STYLESHEET;

  svg.appendChild(style);
  
  svg.appendChild(render(diagram));

  if (debug) {
    svg.appendChild(debugGrid(width, height));
  }

  return svg;
}

export default create;


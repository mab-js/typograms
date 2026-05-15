# typograms

Typograms is a lightweight image format (`text/typogram`) for defining simple
ASCII diagrams in technical documentation, rendered to SVG by a small JS
library.

## Fork status

This is an active TypeScript-rewrite fork of
[`google/typograms`](https://github.com/google/typograms), archived by Google
on 2025-01-21. See [`FORK.md`](FORK.md) for maintenance posture and
[`NOTICE`](NOTICE) for lineage. The verbatim upstream snapshot is preserved at
the `upstream-archive` git tag.

The rewrite is in progress; build instructions and a published package will
land with a future 1.0 release.

## Module map

The TypeScript renderer is split across files under `src/`: `typograms.ts`
is the entry point (parses source, drives the render loop, applies the
embedded stylesheet, exposes `create()`); `grid.ts` holds the `Diagram`
and `Neighbors` types and the `around` neighbor helper; `primitives.ts`
defines the SVG construction primitives (`cross`, `text`, `debugGrid`)
and the `CELL_*` cell-geometry constants; `glyphs.ts` holds the glyph
dispatch table, the alias table, and per-character handlers (the bulk of
the renderer's logic); `browser.ts` is the IIFE bootstrap that wires
`create()` to `DOMContentLoaded`. Per-export TSDoc lives alongside each
definition.

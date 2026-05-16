# typograms

Typograms is a lightweight image format (`text/typogram`) for defining simple
ASCII diagrams in technical documentation, rendered to SVG by a small JS
library.

## Fork status

This is an active TypeScript-rewrite fork of
[`google/typograms`](https://github.com/google/typograms), archived by Google
on 2025-01-21. See [`FORK.md`](FORK.md) for maintenance posture and versioning
policy, and [`NOTICE`](NOTICE) for lineage. The verbatim upstream snapshot is
preserved at the `upstream-archive` git tag.

The fork is unpublished on npm; consumers pin a built artifact from a tagged
GitHub release.

## Use in a browser via `<script>` tag

Drop the built IIFE into a page and mark a `<script>` block as
`type="text/typogram"`. The bootstrap runs on `DOMContentLoaded`, walks every
matching block, and inserts the rendered `<svg>` immediately after it.

```html
<script src="typograms.iife.js"></script>

<script type="text/typogram">

  .-------------.    .-------------.
  |   client    +--->|   server    |
  '-------------'    '-------------'

</script>
```

Per-block attributes on the `<script>` tag:

- `zoom` -- output scale multiplier (default `0.3`).
- `grid` -- when present, overlays the alignment grid and surfaces reserved
  characters in semi-transparent black. Useful while authoring a diagram.
- `disabled` -- when present, the block is skipped (handy for staging
  diagrams that aren't ready to render).

The legacy upstream CDN URL (`https://google.github.io/typograms/typograms.js`)
still works, but it lives in Google's namespace and could disappear without
notice. Fork consumers should pin a built artifact from a `mab-js/typograms`
release instead.

## Use as an ESM module

```js
import create from "typograms";

const svg = create(`
  .-------------.    .-------------.
  |   client    +--->|   server    |
  '-------------'    '-------------'
`, 0.3, false);

document.body.appendChild(svg);
```

`create(source, zoom, debug)` returns a detached `<svg>` element. The first
and last lines of `source` are dropped before rendering, matching the upstream
convention that lets authors leading-newline-pad their source without
affecting layout.

Additional types are re-exported for consumers that want to extend the glyph
dispatch table:

```ts
import create, { type Neighbors, type GlyphHandler } from "typograms";
```

## Embedding in MIT-licensed downstream repos

Typograms is Apache 2.0. Apache-licensed files compose cleanly into
MIT-licensed projects: the Apache file keeps its terms, the surrounding MIT
code is unaffected. The recipe for an MIT-licensed downstream consumer
(e.g. a `mab-go/*` repo) is:

1. Download `typograms.iife.js` from a `mab-js/typograms` GitHub release.
2. Drop it into `docs/` (or wherever the docs site loads scripts from).
3. Leave its `/*!` license header banner intact -- the build configures the
   minifier to preserve it.
4. Add a brief third-party-licenses note somewhere in the consuming repo
   (a `THIRD_PARTY_LICENSES.md` or a README section):

   > This repository includes `docs/typograms.js`, derived from
   > [`mab-js/typograms`](https://github.com/mab-js/typograms) (a fork of
   > `google/typograms`), licensed under Apache 2.0. See the file's header
   > for the full license text.

The consuming repo's `LICENSE` stays MIT.

## Build from source

```
npm install
npm run build
```

The build emits three artifacts to `dist/`:

- `typograms.mjs` -- ESM bundle (the `import` target).
- `typograms.iife.js` -- IIFE bundle exposing a `typograms` global with a
  `create` member; also auto-bootstraps on `DOMContentLoaded`.
- `typograms.d.ts` -- TypeScript declarations.

Additional scripts:

- `npm run lint` -- ESLint over `src/` and tests.
- `npm run typecheck` -- `tsc --noEmit`.
- `npm test` -- vitest run of the main suite.
- `npm run test:parity` -- the snapshot suite that pins behavior against
  the `upstream-archive` reference outputs.
- `npm run test:all` -- both suites.

Node 22 or newer.

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

## Documentation

The ported docs site lives at
[`mab-js.github.io/typograms`](https://mab-js.github.io/typograms) (renders
the same example gallery upstream shipped, served from the fork's built
artifact).

## License

Apache License 2.0. See [`LICENSE`](LICENSE) for the full text and
[`NOTICE`](NOTICE) for lineage and attribution.

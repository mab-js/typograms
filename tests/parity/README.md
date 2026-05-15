# Parity harness

A byte-exact snapshot suite that locks the rendering behavior of
`src/typograms.js` to its upstream-archive baseline (git tag
`upstream-archive`). Every fixture is the source text of a typogram example
from upstream's documentation paired with the SVG that the renderer produced
for it. The harness re-renders each fixture and asserts byte-for-byte
equality against the captured SVG.

This is the parity contract for every later phase: any code transformation
that doesn't change rendering must leave this suite green.

## Layout

```
tests/parity/
  run.spec.js     # Mocha spec, one test per fixture
  render.js       # shared renderer wrapper, also used by capture script
  jsdom-setup.js  # single jsdom instance providing document + XMLSerializer
  README.md       # this file
tests/fixtures/
  <name>/
    source.txt    # typogram source as it appears between <script> tags
    meta.json     # { zoom, debug, origin }
    expected.svg  # captured SVG, byte-exact
    actual.svg    # written on mismatch only; gitignored
```

## Running

```
npm run test:parity
```

Expects all fixtures to pass. A mismatch writes the diverging output to
`tests/fixtures/<name>/actual.svg` so it can be diffed against
`expected.svg`.

## Regenerating fixtures

```
node scripts/parity-capture.js
```

The capture script:

1. Parses `docs/index.html` and `docs/test.html` with jsdom.
2. For each `<script type="text/typogram">`, extracts the source, the `zoom`
   attribute (default 0.3, matching `src/browser.js`), and the `grid`
   attribute (which maps to the renderer's `debug` parameter).
3. Names each fixture by the nearest preceding heading's `id` if it has one,
   otherwise by slugifying the heading text. Collisions get suffixed
   `-01`, `-02`, etc.
4. Writes `source.txt`, `meta.json`, and `expected.svg` for each.

Regeneration is idempotent: re-running with no renderer change produces an
identical corpus. This was verified by capturing twice and comparing
`sha256sum` of every `expected.svg`.

## Why byte-exact

The upstream renderer is deterministic: no `Math.random`, no `Date.now`, no
unordered iteration, no layout-dependent measurements. Byte-exact equality is
therefore the strongest "did we change anything?" signal available and
requires no normalization infrastructure. If a later phase produces noise
that is cosmetic rather than behavioral (e.g. attribute ordering shifts),
the right escalation is a normalized XML diff, not loosening the assertion.

## Renderer invocation contract

The harness drives the renderer exactly the way `src/browser.js` does:

```js
const svg = create(source, zoom, debug);
```

Both the capture script and the test spec go through the
`renderFixture` wrapper in `render.js` so the invocation can only change in
one place.

## Boundaries

- This phase does not modify `src/`, `docs/`, or the existing upstream
  Mocha suite at `tests/typograms.js`. The parity harness layers next to
  the existing tests; both stay green.
- Renderer bugs surfaced by fixtures are captured as-is. Fixing them is a
  later phase; the fixture is the contract until then.

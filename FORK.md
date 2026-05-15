# Fork status

Modifications Copyright 2026 Matthew Burton.
Original work Copyright 2017-2025 Google LLC, licensed under Apache License 2.0.
See [`NOTICE`](NOTICE) for full lineage and [`LICENSE`](LICENSE) for terms.

## Lineage

This repository is a fork of [`google/typograms`](https://github.com/google/typograms),
which Google archived on 2025-01-21. The fork point is the last upstream commit
before archival: `09def88`, preserved as the `upstream-archive` git tag. To
recover the verbatim upstream snapshot:

```
git checkout upstream-archive
```

## Maintenance posture

- **Frozen feature set.** No new diagram primitives. Behavioral parity with the
  upstream archive is the contract.
- **Correctness patches only.** Bugs, security, dependency hygiene, build/test
  infrastructure.
- **No upstream coordination.** This fork is upstream now for its lineage.
- **Apache 2.0 lineage preserved.** All modifications remain under Apache 2.0;
  attribution in [`NOTICE`](NOTICE) must travel with redistributions.
- **Pinned downstream consumption.** Downstream consumers pin a built artifact
  from a tagged release, not a CDN URL.

## Decisions

### 2026-05-15: Discard in-flight upstream renderer rewrite

Upstream's last ~10 commits before archival (ending at `09def88`) were
building a parallel renderer inside `tests/typograms.js`, distinct from
the shipping `src/typograms.js`. The work was a primitive-detection
layer keyed off a `Grid` class with a `paint(x, y)` method that emitted
intermediate Unicode commands; the SVG emission pass was never written
and the entry-point `go()` method was a stub. The file made it into
the fork as `tests/typograms.test.ts` (migrated from mocha to vitest),
where its 87 assertions exercised only the inline `Grid` class, not
the shipping renderer in `src/`.

The unique signal the file carried was a spec for rounded corners on
diagonals (e.g. a `.` between `\` and `/`), a feature neither the
shipping renderer nor the in-flight code ever wired up. Implementing
it now would break parity with `upstream-archive`, conflicting with
the frozen-feature-set posture above.

The file was removed. To recover the original upstream content:

```
git checkout upstream-archive -- tests/typograms.js
```

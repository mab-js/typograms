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

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
 * Headless rendering helper for Node contexts.
 *
 * `create()` from {@link ./typograms} pipes everything through
 * `document.createElementNS` and assumes a DOM is in scope. In a browser that
 * is free; under Node a caller must install `document` and `XMLSerializer` on
 * `globalThis` first. This module installs them lazily from a single JSDOM
 * instance and exposes a one-call render-to-string function.
 *
 * Consumed by the CLI ({@link ./cli}) and by `scripts/parity-capture.ts`.
 * Intentionally not re-exported from the package's main entry — browser
 * consumers don't need it and shouldn't pull jsdom into their bundles.
 *
 * @packageDocumentation
 */

import { JSDOM } from "jsdom";
import create from "./typograms.js";

let installed = false;

function installDomGlobals(): void {
  if (installed) return;
  const { window } = new JSDOM();
  const g = globalThis as unknown as {
    document: Document;
    XMLSerializer: typeof XMLSerializer;
  };
  g.document = window.document as unknown as Document;
  g.XMLSerializer = window.XMLSerializer as unknown as typeof XMLSerializer;
  installed = true;
}

/**
 * Render a typogram source string to a serialized SVG string.
 *
 * Installs JSDOM globals on first call. Subsequent calls reuse the same
 * window. Inherits `create()`'s drop-first-and-last-line behavior — callers
 * that want render-as-authored semantics should pad `source` with a leading
 * and trailing newline.
 *
 * @param source Multi-line ASCII-art diagram.
 * @param zoom Output scale multiplier (default 0.3).
 * @param debug When true, overlays the alignment grid and surfaces reserved
 *   characters in semi-transparent black.
 */
export function renderToString(
  source: string,
  zoom = 0.3,
  debug = false,
): string {
  installDomGlobals();
  const svg = create(source, zoom, debug);
  return new XMLSerializer().serializeToString(svg);
}

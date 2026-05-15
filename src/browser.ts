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

import create from "./typograms.js";

export { create };

function bootstrap(): void {
  const scripts = document.querySelectorAll<HTMLScriptElement>(
    "script[type='text/typogram']",
  );
  for (const script of scripts) {
    if (script.hasAttribute("disabled")) continue;
    const source = script.innerText;
    const zoom = Number(script.getAttribute("zoom") || 0.3);
    const debug = script.hasAttribute("grid");
    const svg = create(source, zoom, debug);
    script.parentNode?.insertBefore(svg, script.nextSibling);
  }
}

document.addEventListener("DOMContentLoaded", bootstrap);

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
// @ts-nocheck

import create from "./typograms.js";

document.addEventListener("DOMContentLoaded", function() {
  // replace all of the <script type="text/typogram"> tags
  for (const script of document.querySelectorAll("script[type='text/typogram']")) {
    if (script.hasAttribute("disabled")) {
      continue;
    }
    //setTimeout(() => {
    const source = script.innerText;
    const zoom = Number(script.getAttribute("zoom") || 0.3);
    const debug = script.hasAttribute("grid");
    const svg = create(source, zoom, debug);
    script.parentNode.insertBefore(svg, script.nextSibling);
    //}, 0);
  }
});




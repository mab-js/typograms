import { defineConfig } from "tsup";

const banner = `/*!
 * typograms (mab-js fork)
 * https://github.com/mab-js/typograms
 *
 * Originally developed by Google (google/typograms, archived 2025-01-21).
 * Apache License 2.0 -- see LICENSE and NOTICE.
 */`;

export default defineConfig([
  {
    entry: { typograms: "src/typograms.ts" },
    format: ["esm"],
    outDir: "dist",
    outExtension: () => ({ js: ".mjs" }),
    banner: { js: banner },
    dts: true,
    minify: true,
    sourcemap: false,
    clean: true,
  },
  {
    entry: { typograms: "src/browser.ts" },
    format: ["iife"],
    globalName: "typograms",
    outDir: "dist",
    outExtension: () => ({ js: ".iife.js" }),
    banner: { js: banner },
    minify: true,
    sourcemap: false,
  },
  {
    entry: { "typograms-cli": "src/cli.ts" },
    format: ["esm"],
    outDir: "dist",
    outExtension: () => ({ js: ".mjs" }),
    banner: { js: banner },
    platform: "node",
    target: "node22",
    external: ["jsdom"],
    shims: false,
    minify: false,
    sourcemap: false,
  },
]);

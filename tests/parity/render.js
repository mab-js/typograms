import create from "../../src/typograms.js";

export function renderFixture({ source, zoom, debug }) {
  const svg = create(source, zoom, debug);
  return new XMLSerializer().serializeToString(svg);
}

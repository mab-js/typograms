import create from "../../src/typograms.js";

export interface FixtureInput {
  source: string;
  zoom: number;
  debug: boolean;
}

export function renderFixture({ source, zoom, debug }: FixtureInput): string {
  const svg = create(source, zoom, debug);
  return new XMLSerializer().serializeToString(svg);
}

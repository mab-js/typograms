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
 * Grid model for typogram source: the {@link Diagram} character grid and the
 * {@link around} helper that extracts a cell's eight neighbors in the
 * {@link Neighbors} order glyph handlers consume.
 */

/**
 * Eight neighboring characters around a grid cell, in fixed clockwise-from-top
 * order with the four corners trailing. Each entry is exactly one character or
 * a single space when the neighbor is out-of-grid.
 */
export type Neighbors = readonly [
  top: string,
  right: string,
  bottom: string,
  left: string,
  topRight: string,
  bottomRight: string,
  bottomLeft: string,
  topLeft: string,
];

/**
 * Parsed typogram source as a 2D character grid. Cells are indexed as
 * `diagram[y][x]` (row first, then column).
 */
export type Diagram = string[][];

/**
 * Extract a cell's eight neighbors in `Neighbors` order. Any neighbor that
 * falls outside the grid is returned as a single space, matching the upstream
 * convention so glyph handlers don't have to special-case the boundary.
 */
export function around(
  diagram: Diagram,
  [x, y]: readonly [number, number],
): Neighbors {
  let left = " ";
  let top = " ";
  let right = " ";
  let bottom = " ";
  let topRight = " ";
  let bottomRight = " ";
  let bottomLeft = " ";
  let topLeft = " ";
  const row = diagram[y];
  const rowAbove = y > 0 ? diagram[y - 1] : undefined;
  const rowBelow = y < diagram.length - 1 ? diagram[y + 1] : undefined;
  if (rowAbove) {
    top = rowAbove[x] || " ";
  }
  if (row && x < row.length - 1) {
    right = row[x + 1] || " ";
  }
  if (rowBelow) {
    bottom = rowBelow[x] || " ";
  }
  if (row && x > 0) {
    left = row[x - 1] || " ";
  }
  if (rowAbove && x < rowAbove.length - 1) {
    topRight = rowAbove[x + 1] || " ";
  }
  if (rowBelow && x < rowBelow.length) {
    bottomRight = rowBelow[x + 1] || " ";
  }
  if (rowBelow && x > 0) {
    bottomLeft = rowBelow[x - 1] || " ";
  }
  if (rowAbove && x > 0) {
    topLeft = rowAbove[x - 1] || " ";
  }
  return [top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft];
}

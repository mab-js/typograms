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
 * Low-level SVG construction primitives shared across glyph handlers and the
 * top-level renderer. The CELL_* constants define the typogram coordinate
 * space; helpers emit detached SVGGElement subtrees that callers append into a
 * parent group.
 */

/** SVG XML namespace, required by `document.createElementNS`. */
export const SVG_NS = "http://www.w3.org/2000/svg";

/** Width of a single cell in SVG user units. */
export const CELL_W = 30;
/** Height of a single cell in SVG user units. */
export const CELL_H = 54;
/** X coordinate of a cell's center (`CELL_W / 2`). */
export const CELL_CX = 15;
/** Y coordinate of a cell's center (`CELL_H / 2`). */
export const CELL_CY = 27;

/**
 * Eight booleans toggling each of `cross()`'s line segments, in the same order
 * as `Neighbors`.
 */
type CrossArgs = readonly [
  top: boolean,
  right: boolean,
  bottom: boolean,
  left: boolean,
  topRight: boolean,
  bottomRight: boolean,
  bottomLeft: boolean,
  topLeft: boolean,
];

/** A detached, empty `<g>` element ready to be appended to. */
export const emptyGroup = (): SVGGElement => document.createElementNS(SVG_NS, "g");

/**
 * Draw up to eight line segments radiating from a cell's center: four cardinal
 * (top/right/bottom/left) and four diagonal (corner-to-center). Each flag
 * toggles its corresponding segment.
 */
export function cross([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]: CrossArgs): SVGGElement {
  const result = document.createElementNS(
      "http://www.w3.org/2000/svg", "g");
  if (top) {
  // {
    const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", CELL_CX);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", CELL_CX);
    line.setAttribute("y2", CELL_CY);
    line.setAttribute("class", "part");
    result.appendChild(line);
  }

  if (right) {
  //{
    const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", CELL_CX);
    line.setAttribute("y1", CELL_CY);
    line.setAttribute("x2", CELL_W);
    line.setAttribute("y2", CELL_CY);
    line.setAttribute("class", "part");
    result.appendChild(line);
  }

  if (bottom) {
  //{
    const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", CELL_CX);
    line.setAttribute("y1", CELL_CY);
    line.setAttribute("x2", CELL_CX);
    line.setAttribute("y2", CELL_H);
    line.setAttribute("class", "part");
    result.appendChild(line);
  }

  if (left) {
  //{
    const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 0);
    line.setAttribute("y1", CELL_CY);
    line.setAttribute("x2", CELL_CX);
    line.setAttribute("y2", CELL_CY);
    line.setAttribute("class", "part");
    result.appendChild(line);
  }

  const diagonal = document.createElementNS(
      "http://www.w3.org/2000/svg", "polygon");

  diagonal.setAttribute("points", [
    [0, 0],
    [20.6, 0],
    [20.6, 3],
    [0, 3],
  ].map(([x, y]) => `${x},${y}`).join(" "));

  if (topRight) {
  //{
    const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", CELL_W);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", CELL_CX);
    line.setAttribute("y2", CELL_CY);
    line.setAttribute("class", "part");
    // line.setAttribute("transform", "scale(1, 1)");
    // line.setAttribute("clip-path", "polygon(-6 -6, 15 -6, 15 30, -6 30)");
    // line.setAttribute("stroke-linecap", "square !important");
    result.appendChild(line);
    //const mask = document.createElementNS(
    //  "http://www.w3.org/2000/svg", "polygon");
    //mask.setAttribute("points", "0 0, 15 0, 15 18, 0 18");
    //result.appendChild(mask);
    //console.log("hi");
  }

  if (bottomRight) {
  //{
    const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", CELL_CX);
    line.setAttribute("y1", CELL_CY);
    line.setAttribute("x2", CELL_W);
    line.setAttribute("y2", CELL_H);
    line.setAttribute("class", "part");
    result.appendChild(line);
  }

  if (bottomLeft) {
  // {
    const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", CELL_CX);
    line.setAttribute("y1", CELL_CY);
    line.setAttribute("x2", 0);
    line.setAttribute("y2", CELL_H);
    line.setAttribute("class", "part");
    result.appendChild(line);
  }

  if (topLeft) {
  //{
    const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 0);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", CELL_CX);
    line.setAttribute("y2", CELL_CY);
    line.setAttribute("class", "part");
    result.appendChild(line);
  }

  return result;
}

/**
 * Render `char` as a single SVG `<text>` element placed at the cell's text
 * baseline. When `reserved` is true the "reserved" class is applied so the
 * stylesheet can hide or surface the glyph depending on debug mode.
 */
export function text(char: string, reserved: boolean): SVGGElement {
  const g = document.createElementNS(
      "http://www.w3.org/2000/svg", "g");
  const result = document.createElementNS(
    "http://www.w3.org/2000/svg", "text");
  //result.setAttribute("xml:space", "preserve");
  //result.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
  const value = document.createTextNode(char);
  result.appendChild(value);
  if (reserved) {
    result.setAttribute("class", "reserved");
  }
  const translation = [
    [CELL_CX, 24],
    //[1.5, 1.5 * ratio]
  ];
  result.setAttribute("transform", translation.map(([x, y]) => `translate(${x}, ${y})`).join(" "));
  g.appendChild(result);
  return g;
}

/**
 * Build the alignment-grid overlay used in debug mode: a 3-unit lattice across
 * the diagram bounds. Returns a detached `<g>`; the caller appends it after
 * the rendered diagram so the grid sits on top.
 */
export function debugGrid(width: number, height: number): SVGGElement {
  const result = document.createElementNS(
      "http://www.w3.org/2000/svg", "g");

  const vertical = document.createElementNS(
        "http://www.w3.org/2000/svg", "line");
  vertical.setAttribute("x1", 15);
  vertical.setAttribute("y1", 0);
  vertical.setAttribute("x2", 15);
  vertical.setAttribute("y2", 54);
  vertical.setAttribute("class", "center");
  //result.appendChild(vertical);

  const horizontal = document.createElementNS(
        "http://www.w3.org/2000/svg", "line");
  horizontal.setAttribute("x1", 0);
  horizontal.setAttribute("y1", 30);
  horizontal.setAttribute("x2", 30);
  horizontal.setAttribute("y2", 54);
  horizontal.setAttribute("class", "center");
  //result.appendChild(horizontal);

  for (let i = 0; i <= width * CELL_W; i+= 3) {
    const line = document.createElementNS(
        "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", i);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", i);
    line.setAttribute("y2", CELL_H * height);
    line.setAttribute("class", "grid");
    result.appendChild(line);
  }

  for (let i = 0; i <= height * CELL_H; i+= 3) {
    const line = document.createElementNS(
        "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 0);
    line.setAttribute("y1", i);
    line.setAttribute("x2", CELL_W * width);
    line.setAttribute("y2", i);
    line.setAttribute("class", "grid");
    result.appendChild(line);
  }

  return result;
}

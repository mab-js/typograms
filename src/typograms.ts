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

// The renderer pipes numeric coordinates and boolean flags through
// Element.setAttribute, relying on the DOM's implicit String() coercion. The
// strict lib.dom signature accepts only strings, so widen it here rather than
// wrap every one of ~200 call sites in String(...).
declare global {
  interface Element {
    setAttribute(qualifiedName: string, value: string | number | boolean): void;
  }
}

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

export type GlyphHandler = (neighbors: Neighbors) => SVGGElement;
type GlyphTable = Record<string, GlyphHandler>;
type AliasTable = Record<string, string>;
type Diagram = string[][];

const SVG_NS = "http://www.w3.org/2000/svg";

const emptyGroup = (): SVGGElement => document.createElementNS(SVG_NS, "g");

function callGlyph(key: string, neighbors: Neighbors): SVGGElement {
  const handler = glyphs[key];
  return handler ? handler(neighbors) : emptyGroup();
}

function grid(width: number, height: number): SVGGElement {
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

  for (let i = 0; i <= width * 30; i+= 3) {
    const line = document.createElementNS(
        "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", i);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", i);
    line.setAttribute("y2", 54 * height);
    line.setAttribute("class", "grid");
    result.appendChild(line);
  }

  for (let i = 0; i <= height * 54; i+= 3) {
    const line = document.createElementNS(
        "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 0);
    line.setAttribute("y1", i);
    line.setAttribute("x2", 30 * width);
    line.setAttribute("y2", i);
    line.setAttribute("class", "grid");
    result.appendChild(line);
  }

  return result;
}

const glyphs: GlyphTable = {};

glyphs["|"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  const result = document.createElementNS(
      "http://www.w3.org/2000/svg", "g");
  if (right == "_") {
    const line = document.createElementNS(
        "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "18");
    line.setAttribute("y1", "51");
    line.setAttribute("x2", "30");
    line.setAttribute("y2", "51");
    line.setAttribute("class", "part");
    result.appendChild(line);
  }
  if (left == "_") {
    const line = document.createElementNS(
        "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "0");
    line.setAttribute("y1", "51");
    line.setAttribute("x2", "12");
    line.setAttribute("y2", "51");
    line.setAttribute("class", "part");
    result.appendChild(line);
  }
  if (topRight == "_") {
    const line = document.createElementNS(
        "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "12");
    line.setAttribute("y1", "-3");
    line.setAttribute("x2", "30");
    line.setAttribute("y2", "-3");
    line.setAttribute("class", "part");
    result.appendChild(line);
  }
  if (topLeft == "_") {
    const line = document.createElementNS(
        "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "0");
    line.setAttribute("y1", "-3");
    line.setAttribute("x2", "18");
    line.setAttribute("y2", "-3");
    line.setAttribute("class", "part");
    result.appendChild(line);
  }
  // const leg =  && ;
  // const head =  && ;
  //console.log(!(bottomLeft == "/" && bottomRight == "\\"));
  //console.log(!(topRight == "/" && topLeft == "\\"));
  result.appendChild(cross([
    !(topRight == "/" && topLeft == "\\"), // top
    ["-"].includes(right), // right
    !(bottomLeft == "/" && bottomRight == "\\"), // bottom
    ["-"].includes(left), // left
    topRight == "/", // topRight
    bottomRight == "\\", // bottomRight
    bottomLeft == "/", // bottomLeft
    topLeft == "\\"  // topLeft
    ]));
  return result;
}

glyphs["-"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  return cross([
    ["|"].includes(top), // top
    true, // right
    ["|"].includes(bottom), // bottom
    true, // left
    false, // topRight
    false, // bottomRight
    false, // bottomLeft
    false  // topLeft
    ]);
}

glyphs["~"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  const result = document.createElementNS(
      "http://www.w3.org/2000/svg", "g");
  const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", "9");
  line.setAttribute("y1", "27");
  line.setAttribute("x2", "24");
  line.setAttribute("y2", "27");
  line.setAttribute("class", "part");
  result.appendChild(line);
  return result;
}

glyphs["_"] = (around) => {
  const line = callGlyph("-", around);
  line.setAttribute("transform", "translate(0 24)");
  return line;
}

glyphs[":"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  const result = document.createElementNS(
      "http://www.w3.org/2000/svg", "g");
  const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", "15");
  line.setAttribute("y1", "0");
  line.setAttribute("x2", "15");
  line.setAttribute("y2", "60");
  line.setAttribute("class", "part");
  line.setAttribute("style", "stroke-dasharray: 15; stroke-dashoffset: 0;");
  result.appendChild(line);
  if (top == "+") {
    const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "15");
    line.setAttribute("y1", "-24");
    line.setAttribute("x2", "15");
    line.setAttribute("y2", "-15");
    line.setAttribute("class", "part");
    result.appendChild(line);
  }
  if (bottom == "+") {
    const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "15");
    line.setAttribute("y1", "60");
    line.setAttribute("x2", "15");
    line.setAttribute("y2", "78");
    line.setAttribute("class", "part");
    result.appendChild(line);
  }
  return result;
}

glyphs["="] = (_around) => {
  const result = document.createElementNS(
      "http://www.w3.org/2000/svg", "g");
  const first = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
  first.setAttribute("x1", "0");
  first.setAttribute("y1", "21");
  first.setAttribute("x2", "30");
  first.setAttribute("y2", "21");
  first.setAttribute("class", "part");
  result.appendChild(first);
  const second = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
  second.setAttribute("x1", "0");
  second.setAttribute("y1", "30");
  second.setAttribute("x2", "30");
  second.setAttribute("y2", "30");
  second.setAttribute("class", "part");
  result.appendChild(second);
  return result;
}

glyphs["*"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  const result = document.createElementNS(
      "http://www.w3.org/2000/svg", "g");
  const circle = document.createElementNS(
      "http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", "0");
  circle.setAttribute("cy", "0");
  circle.setAttribute("r", "21");
  circle.setAttribute("stroke", "none");
  circle.setAttribute("transform", "translate(15, 27)");
  result.appendChild(circle);

  result.appendChild(cross([
    ["+", "|"].includes(top),
    ["+", "-"].includes(right),
    ["+", "|"].includes(bottom),
    ["+", "-"].includes(left),
    ["/"].includes(topRight),
    ["\\"].includes(bottomRight),
    ["/"].includes(bottomLeft),
    ["\\"].includes(topLeft)
    ]));

  return result;
}

glyphs["o"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  const result = document.createElementNS(
      "http://www.w3.org/2000/svg", "g");
  const circle = document.createElementNS(
      "http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", "0");
  circle.setAttribute("cy", "0");
  circle.setAttribute("r", "18");
  circle.setAttribute("stroke-width", "6");
  circle.setAttribute("fill", "none");
  circle.setAttribute("stroke", "black");
  circle.setAttribute("transform", "translate(15, 27)");
  result.appendChild(circle);

  const connectors = cross([
    ["+", "|"].includes(top),
    ["+", "-"].includes(right),
    ["+", "|"].includes(bottom),
    ["+", "-"].includes(left),
    ["/"].includes(topRight),
    ["\\"].includes(bottomRight),
    ["/"].includes(bottomLeft),
    ["\\"].includes(topLeft)
    ]);

  result.appendChild(connectors);

  const inner = document.createElementNS(
      "http://www.w3.org/2000/svg", "circle");
  inner.setAttribute("cx", "0");
  inner.setAttribute("cy", "0");
  inner.setAttribute("r", "15");
  inner.setAttribute("fill", "white");
  inner.setAttribute("opacity", "100%");
  inner.setAttribute("transform", "translate(15, 27)");
  result.appendChild(inner);

  return result;
}

glyphs["/"] = (around) => {
  const [top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft] = around;
  const result = document.createElementNS(
      "http://www.w3.org/2000/svg", "g");
  result.appendChild(cross([
    ["|"].includes(top), // top
    false, // right
    ["|"].includes(bottom), // bottom
    false, // left
    true, // topRight
    false, // bottomRight
    true,  // bottomLeft
    false  // topLeft
    ]));
  if (right == "\\") {
    const tip = cross([
      false,
      false,
      false,
      false,
      false,
      false,
      true, // bottomLeft
      false
    ]);
    tip.setAttribute("transform", "translate(30 -54)");
    tip.setAttribute("clip-path", "polygon(-3 0, 0 0, 0 54, -3 54)");
    result.appendChild(tip);
  }
  if (left == "\\") {
    const tip = cross([
      false,
      false,
      false,
      false,
      true, // topRight
      false,
      false, // bottomLeft
      false
    ]);
    tip.setAttribute("transform", "translate(-30 54)");
    tip.setAttribute("clip-path", "polygon(15 -6, 33 -6, 33 6, 15 6)");
    result.appendChild(tip);
  }

  if (right == "_") {
    const line = callGlyph("_", around);
    result.appendChild(line);
  }

  return result;
}

glyphs["\\"] = (around) => {
  const [top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft] = around;
  const result = document.createElementNS(
      "http://www.w3.org/2000/svg", "g");
  result.appendChild(cross([
    ["|"].includes(top), // top
    false, // right
    ["|"].includes(bottom), // bottom
    false, // left
    false, // topRight
    true, // bottomRight
    false, // bottomLeft
    true  // topLeft
    ]));
  if (left == "/") {
    const tip = cross([
      false,
      false,
      false,
      false,
      false,
      true, // bottomRight
      false,
      false
    ]);
    tip.setAttribute("transform", "translate(-30 -54)");
    tip.setAttribute("clip-path", "polygon(15 0, 30 0, 30 54, 15 54)");  
    result.appendChild(tip);
  }
  if (right == "/") {
    const tip = cross([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true
    ]);
    tip.setAttribute("transform", "translate(30 54)");
    tip.setAttribute("clip-path", "polygon(-3 0, 0 0, 0 6, -3 6)");  
    result.appendChild(tip);
  }

  if (left == "_") {
    const line = callGlyph("_", around);
    result.appendChild(line);
  }

  return result;
}

glyphs["#"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  const result = document.createElementNS(
      "http://www.w3.org/2000/svg", "g");
  const polygon = document.createElementNS(
      "http://www.w3.org/2000/svg", "polygon");
  const points = [
    [0, 0],
    [42, 0],
    [42, 42],
    [0, 42],
  ];
  polygon.setAttribute("points", points.map(([x, y]) => `${x},${y}`).join(" "));
  polygon.setAttribute("transform", "translate(-6, 6)");
  result.appendChild(polygon);

  result.appendChild(cross([
    ["+", "|"].includes(top),
    ["+", "-"].includes(right),
    ["+", "|"].includes(bottom),
    ["+", "-"].includes(left),
    ["/"].includes(topRight),
    ["\\"].includes(bottomRight),
    ["/"].includes(bottomLeft),
    ["\\"].includes(topLeft)
    ]));

  return result;
}

glyphs["+"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  const result = document.createElementNS(
      "http://www.w3.org/2000/svg", "g");
  const r = ["*", "#", "-", "+", "~", ">", ".", "'", "`"].includes(right);
  const l = ["*", "#", "-", "+", "~", "<", ".", "'", "`"].includes(left);
  const t = ["*", "#", "|", "+", ".", "`", "^"].includes(top);
  const b = ["*", "#", "|", "+", "'", "`", "v"].includes(bottom);
  const tR = ["/", "*", "#"].includes(topRight);
  const bR = ["\\", "*", "#"].includes(bottomRight);
  const tL = ["\\", "*", "#"].includes(topLeft);
  const bL = ["/", "*", "#"].includes(bottomLeft);

  // cross
  result.appendChild(cross([
    t,
    r,
    b,
    l,
    tR,
    bR,
    bL,
    tL
  ]));

  // center
  if ((l || r) && (b || t)) {
    const center = document.createElementNS(
      "http://www.w3.org/2000/svg", "polygon");
    center.setAttribute("points", "0,0 6,0 6,6 0,6");
    center.setAttribute("transform", "translate(-3 -3) translate(15 27)");
    result.appendChild(center);
  }

  // tip
  if (tR || tL) {
    const center = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      tL, // bottomRight
      tR, // bottomLeft
      false, // topLeft
    ]);
    center.setAttribute("clip-path", "polygon(0 -3, 30 -3, 30 0, 0 0)");
    result.appendChild(center);
  }

  if (bR || bL) {
    const center = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      bL, // topRight
      false, // bottomRight
      false, // bottomLeft
      bR, // topLeft
    ]);
    center.setAttribute("clip-path", "polygon(0 27, 15 27, 15 30, 0 30)");
    result.appendChild(center);
  }

  if (bL || tL) {
    const center = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      bL && bR, // topRight
      tL && tR, // bottomRight
      false, // bottomLeft
      false, // topLeft
    ]);
    center.setAttribute("clip-path", "polygon(-3 0, 0 0, 0 54, -3 54)");
    result.appendChild(center);
  }

  if (bR || tR) {
    const center = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      false, // bottomRight
      tR && tL, // bottomLeft
      bR && bL, // topLeft
    ]);
    //console.log(center);
    center.setAttribute("clip-path", "polygon(15 0, 30 0, 30 54, 15 54)");
    result.appendChild(center);
  }

  if (r || l) {
    const center = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      r || bL, // topRight
      tL, // bottomRight
      tR, // bottomLeft
      l || bR, // topLeft
    ]);
    center.setAttribute("clip-path", "polygon(-3 24, 30 24, 30 30, -3 30)");
    result.appendChild(center);
  }
  return result;
}

glyphs["."] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  const result = document.createElementNS(
      "http://www.w3.org/2000/svg", "g");

  // top-right
  if ((right == "-" || right == "+") && (bottom == "|" || bottom == "'" || bottom == "`" || bottom == "+")) {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 30 24
        A 18 18, 0, 0, 0, 12 42
        L 12 54
        L 18 54
        L 18 42
        A 12 12, 0, 0, 1, 30 30
        Z`);
    result.appendChild(path);
  }

  // top-left
  if ((left == "-" || left == "+") && (bottom == "|" || bottom == "'" || bottom == "`" || bottom == "+")) {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 0 24
        A 18 18, 0, 0, 1, 18 42
        L 18 54
        L 12 54
        L 12 42
        A 12 12, 0, 0, 0, 0 30        
        Z`);
    result.appendChild(path);
  }

  // top-right
  if ((right == "-" || right == "+") && (top == "|" || top == "." || top == "+")) {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 30 30
        A 18 18, 0, 0, 1, 12 12
        L 12 0
        L 18 0
        L 18 12
        A 12 12, 0, 0, 0, 30 24
        Z`);
    result.appendChild(path);
  }

  // bottom-left
  if ((left == "-" || left == "+") && (top == "|" || top == "." || top == "+")) {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 0 30
        A 18 18, 0, 0, 0, 18 12
        L 18 0
        L 12 0
        L 12 12
        A 12 12, 0, 0, 1, 0 24
        Z`);
    result.appendChild(path);
  }

  // bottom right-topRight
  if (right == "-" && topRight == "/") {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 30 30
        A 12 12, 0, 0, 1, 18 18
        L 18 15
        L 24 15
        L 24 18
        A 6 6, 0, 0, 0, 30 24
        Z`);
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      true, // topRight
      false, // bottomRight
      false, // bottomLeft
      false  // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(15px -10px, 30px -10px, 30px 30px, 2px 15px)");
    result.appendChild(line);
  }

  // right-topLeft
  if (right == "-" && topLeft == "\\") {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M -3 0
        A 60 60, 0, 0, 0, 30 30
        L 30 24
        A 60 60, 0, 0, 1, 0 -6
        Z`);
    result.appendChild(path);
  }

  // left-topRight
  if (left == "-" && topRight == "/") {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 0 30
        A 60 60, 0, 0, 0, 33 0
        L 30 -6
        A 60 60, 0, 0, 1, 0 24
        Z`);
    result.appendChild(path);
  }

  // bottom left-topLeft
  if (left == "-" && topLeft == "\\") {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 0 30
        A 12 12, 0, 0, 0, 12 18
        L 12 15
        L 6 15
        L 6 18
        A 6 6, 0, 0, 1, 0 24
        Z`);
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      false, // bottomRight
      false, // bottomLeft
      true  // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 -3, 12 -3, 12 18, -3 18)");
    result.appendChild(line);
  }

  // bottom-topRight
  if (bottom == "|" && topRight == "/") {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 12 54
        A 120 120, 0, 0, 1, 30 -6
        L 37 -6
        A 120 120, 0, 0, 0, 18 54
        Z`);
    result.appendChild(path);
  }

  // top-bottomRight
  if (top == "|" && bottomRight == "\\") {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 30 60
        A 120 120, 0, 0, 1, 12 0
        L 18 0
        A 120 120, 0, 0, 0, 37 60
        Z`);
    result.appendChild(path);
  }

  // top-bottomLeft
  if (top == "|" && bottomLeft == "/") {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 0 60
        A 120 120, 0, 0, 0, 18 0
        L 12 0
        A 120 120, 0, 0, 1, -7 60
        Z`);
    result.appendChild(path);
  }

  // bottom-topLeft
  if (bottom == "|" && topLeft == "\\") {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 12 54
        A 120 120, 0, 0, 0, -7 -6
        L 0 -6
        A 120 120, 0, 0, 1, 18 54
        Z`);
    result.appendChild(path);
  }

  // right-bottomLeft
  if (right == "-" && bottomLeft == "/") {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 0 48
        A 42 42, 0, 0, 1, 30 24
        L 30 30
        A 42 42, 0, 0, 0, 6 48
        Z`);
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      false, // bottomRight
      true, // bottomLeft
      false  // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 15, 12 15, 12 30, -3 30)");
    result.appendChild(line);
  }

  // left-bottomRight
  if (left == "-" && bottomRight == "\\") {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 0 24
        A 42 42, 0, 0, 1, 30 48
        L 24 48
        A 42 42, 0, 0, 0, 0 30
        Z`);

    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      true, // bottomRight
      false, // bottomLeft
      false  // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 15, 12 15, 21 30, -3 30)");
    result.appendChild(line);
  }

  // left-bottomLeft
  if (left == "-" && bottomLeft == "/") {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 0 24
        A 12 12, 0, 0, 1, 12 39
        L 6 39
        A 6 6, 0, 0, 0, 0 30
        Z`);
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      false, // bottomRight
      true, // bottomLeft
      false  // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 6, 12 6, 12 30, -3 30)");
    result.appendChild(line);
  }

  // right-bottomRight
  if (right == "-" && bottomRight == "\\") {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 30 24
        A 12 12, 0, 0, 0, 18 39
        L 24 39
        A 6 6, 0, 0, 1, 30 30 
        Z`);
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      true, // bottomRight
      false, // bottomLeft
      false  // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(3 6, 18 6, 18 30, 3 30)");
    result.appendChild(line);
  }

  // bottomLeft-bottomRight
  if (bottomLeft == "/" && bottomRight == "\\") {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 3 42
        A 15 15, 0, 0, 1, 27 42
        L 25 51
        A 9 9, 0, 0, 0, 5 51
        Z`);
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      true, // bottomRight
      true, // bottomLeft
      false  // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 15, 33 15, 33 30, -3 30)");
    result.appendChild(line);
  }

  // topLeft-topRight
  if (topLeft == "\\" && topRight == "/") {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 3 12
        A 15 15, 0, 0, 0, 27 12
        L 22 9
        A 9 9, 0, 0, 1, 8 9
        Z`);
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      true, // topRight
      false, // bottomRight
      false, // bottomLeft
      true  // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 -3, 33 -3, 33 12, -3 12)");
    result.appendChild(line);
  }

  // topRight-bottomRight
  if (topRight == "/" && bottomRight == "\\") {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 22 9
        A 30 30, 0, 0, 0, 22 45
        L 28 45
        A 30 30, 0, 0, 1, 28 9
        Z`);
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      true, // topRight
      true, // bottomRight
      false, // bottomLeft
      false  // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(6 -3, 33 -3, 33 57, 6 57)");
    result.appendChild(line);
  }

  // topLeft-bottomLeft
  if (topLeft == "\\" && bottomLeft == "/") {
    const path = document.createElementNS(
        "http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `
        M 8 9
        A 30 30, 0, 0, 1, 8 45
        L 2 45
        A 30 30, 0, 0, 0, 2 9
        Z`);
    result.appendChild(path);
    const line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      false, // bottomRight
      true, // bottomLeft
      true  // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 -3, 9 -3, 9 57, -3 57)");
    result.appendChild(line);
  }

  return result;
}

const alias: AliasTable = {
  "┌": "+",
  "┐": "+",
  "└": "+",
  "┘": "+",
  "─": "-",
  "►": ">",
  "'": ".",
  "`": ".",
  "V": "v",
}

for (const [key, value] of Object.entries(alias)) {
  glyphs[key] = (around) => {
    const target = glyphs[value];
    if (!target) {
      return document.createElementNS(SVG_NS, "g");
    }
    return target(around);
  }
}


glyphs[">"] = ([, right]) => {
  const result = document.createElementNS(SVG_NS, "g");
  const arrow = document.createElementNS(SVG_NS, "polygon");
  arrow.setAttribute("points", "0,0 42,18 0,36");
  let reach = 0;
  if (right == "*" || right == "o" || right == "#") {
    reach -= 18;
  }
  arrow.setAttribute("transform", `translate(${reach} 9)`);
  result.appendChild(arrow);
  return result;
}

glyphs["<"] = ([, , , left]) => {
  const result = document.createElementNS(SVG_NS, "g");
  const arrow = document.createElementNS(SVG_NS, "polygon");
  arrow.setAttribute("points", "0,0 42,18 0,36");
  let reach = 30;
  if (left == "*" || left == "o" || left == "#") {
    reach += 18;
  }
  arrow.setAttribute("transform", `translate(${reach} 9) translate(0 36) rotate(180)`);
  result.appendChild(arrow);
  return result;
}

glyphs["v"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  const result = document.createElementNS(
      "http://www.w3.org/2000/svg", "g");
  const arrow = document.createElementNS(
    "http://www.w3.org/2000/svg", "polygon");
  arrow.setAttribute("points", "0,0 42,18 0,36");
  let reach = 36;
  if (bottom == " ") {
    reach = 12;
  } else if (bottom == "_") {
    reach += 18;
  } else if (bottom == "*" || bottom == "o" ||  bottom == "#") {
    reach -= 18;
  }
  if (topRight == "/") {
    arrow.setAttribute("transform", `translate(-36 33) rotate(${90 + 22.5}, 42, 18)`);
  } else if (topLeft == "\\") {
    arrow.setAttribute("transform", `translate(-18 33) rotate(${90 - 22.5}, 42, 18)`);
  } else {
    arrow.setAttribute("transform", `translate(33 ${reach}) rotate(90)`);
  }
  result.appendChild(arrow);
  result.appendChild(cross([
    ["|", "+"].includes(top), // top
    false, // right
    ["|", "+"].includes(top), // bottom
    false, // left
    ["/"].includes(topRight), // topRight
    false, // bottomRight
    false, // bottomLeft
    ["\\"].includes(topLeft) // topLeft
    ]));
  return result;
}

glyphs["^"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  const result = document.createElementNS(
      "http://www.w3.org/2000/svg", "g");
  const arrow = document.createElementNS(
    "http://www.w3.org/2000/svg", "polygon");
  arrow.setAttribute("points", "0,0 42,18 0,36");
  let reach = 42;
  if (top == "-") {
    reach -= 15;
  }
  if (bottomLeft == "/") {
    arrow.setAttribute("transform", `translate(-18 -15) rotate(${- 45 - 22.5}, 42, 18)`);
  } else if (bottomRight == "\\") {
    arrow.setAttribute("transform", `translate(-36 -15) rotate(${- 90 - 22.5}, 42, 18)`);
  } else { 
     arrow.setAttribute("transform", `translate(-3 ${reach}) rotate(-90)`);
  }
  result.appendChild(arrow);
  result.appendChild(cross([
    false, // top
    false, // right
    ["+", "|"].includes(bottom), // bottom
    false, // left
    false, // topRight
    ["\\"].includes(bottomRight), // bottomRight
    ["/"].includes(bottomLeft), // bottomLeft
    false // topLeft
    ]));
  return result;
}


function cross([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]: CrossArgs): SVGGElement {
  const result = document.createElementNS(
      "http://www.w3.org/2000/svg", "g");
  if (top) {
  // {
    const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 15);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", 15);
    line.setAttribute("y2", 27);
    line.setAttribute("class", "part");    
    result.appendChild(line);
  }

  if (right) {
  //{
    const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 15);
    line.setAttribute("y1", 27);
    line.setAttribute("x2", 30);
    line.setAttribute("y2", 27);
    line.setAttribute("class", "part");    
    result.appendChild(line);
  }

  if (bottom) {
  //{
    const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 15);
    line.setAttribute("y1", 27);
    line.setAttribute("x2", 15);
    line.setAttribute("y2", 54);
    line.setAttribute("class", "part");    
    result.appendChild(line);
  }

  if (left) {
  //{
    const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 0);
    line.setAttribute("y1", 27);
    line.setAttribute("x2", 15);
    line.setAttribute("y2", 27);
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
    line.setAttribute("x1", 30);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", 15);
    line.setAttribute("y2", 27);
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
    line.setAttribute("x1", 15);
    line.setAttribute("y1", 27);
    line.setAttribute("x2", 30);
    line.setAttribute("y2", 54);
    line.setAttribute("class", "part");    
    result.appendChild(line);
  }

  if (bottomLeft) {
  // {
    const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 15);
    line.setAttribute("y1", 27);
    line.setAttribute("x2", 0);
    line.setAttribute("y2", 54);
    line.setAttribute("class", "part");    
    result.appendChild(line);
  }

  if (topLeft) {
  //{
    const line = document.createElementNS(
      "http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 0);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", 15);
    line.setAttribute("y2", 27);
    line.setAttribute("class", "part");    
    result.appendChild(line);
  }

  return result;
}

function text(char: string, reserved: boolean): SVGGElement {
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
    [15, 24],
    //[1.5, 1.5 * ratio]
  ];
  result.setAttribute("transform", translation.map(([x, y]) => `translate(${x}, ${y})`).join(" "));
  g.appendChild(result);
  return g;
}

function render(diagram: Diagram): SVGGElement {
  const result = document.createElementNS(SVG_NS, "g");

  for (let y = 0; y < diagram.length; y++) {
    const row = diagram[y];
    if (!row) continue;
    for (let x = 0; x < row.length; x++) {
      const char = row[x];

      if (char === undefined || char === " " || char === '"') {
        continue;
      }

      const handler = glyphs[char];

      const g = document.createElementNS(SVG_NS, "g");

      let str = false;
      for (let i = 0; i < x; i++) {
        if (row[i] === '"') {
          str = !str;
        }
      }

      const neighbors = around(diagram, [x, y]);

      if (char.match(/[A-Za-z0-9]/)) {
        const [, right, , left] = neighbors;
        // Special-case "v", which is a down arrow and also a text character.
        str = str || /[A-Za-uw-z0-9]/.test(left) || /[A-Za-uw-z0-9]/.test(right);
      }

      const reserved = handler !== undefined && !str;

      if (reserved) {
        g.appendChild(handler(neighbors));
      }

      g.appendChild(text(char, reserved));

      g.setAttribute("transform", `translate(${x * 30} ${y * 54})`);
      result.appendChild(g);
    }
  }
  return result;
}

/**
 * Render a typogram source string to an SVG element.
 *
 * The first and last lines of `source` are dropped before rendering, matching
 * the upstream convention that lets authors leading-newline-pad their
 * `<script type="text/typogram">` blocks without affecting layout.
 *
 * @param source Multi-line ASCII-art diagram.
 * @param zoom Output scale multiplier; the IIFE bootstrap defaults this to 0.3.
 * @param debug When true, overlays the alignment grid and surfaces reserved
 *   characters in semi-transparent black.
 * @returns A detached `<svg>` element. Append it to a DOM target to display.
 */
function create(source: string, zoom: number, debug: boolean): SVGElement {
  const diagram: Diagram = source
    .split("\n")
    .map((line) => line.trimEnd().split(""));

  diagram.shift();
  diagram.splice(-1);

  let width = 0;
  const height = diagram.length;

  for (let y = 0; y < diagram.length; y++) {
    const row = diagram[y];
    if (!row) continue;
    for (let x = 0; x < row.length; x++) {
      if (row.length > width) {
        // Upstream parity quirk: indexes by x rather than y. Preserved
        // because the snapshot fixtures encode the resulting widths.
        width = diagram[x]?.length ?? width;
      }
    }
  }

  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("width", width * 30 * zoom);
  svg.setAttribute("height", height * 54 * zoom);
  svg.setAttribute("debug", debug);
  const padding = 0;

  svg.setAttribute("viewBox", `${-padding} ${-padding} ${width * 30 + 2 * padding} ${height * 54 + 2 * padding}`);
  svg.setAttribute("class", "debug");

  const style = document.createElementNS(SVG_NS, "style");
  style.innerHTML = `
.diagram {
  display: block;
}

.diagram line, .diagram circle, .diagram rect {
  stroke: black;
}

.diagram line {
  stroke-width: 2;
}

.diagram circle {
  r: 3.5;
}

.diagram rect {
  width: 6px;
  height: 6px;
}

.diagram text, .glyph, .debug text {
  /** font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace; **/
  font-family: Iosevka Fixed, monospace;
  font-size: 3em;
  text-anchor: middle;
  alignment-baseline: central;
  white-space: pre;
}

.reserved {
  fill: transparent;
  white-space: pre;
}

.debug[debug="true"] .reserved {
  fill: black;
  opacity: 0.5;
}

.debug[debug="true"] line.grid {
  stroke: black;
  stroke-width: 0.2;
  stroke-linecap: butt;
  fill: black;
  opacity: 1%;
}

polygon {
  stroke-width: 0;
}

.debug[debug="true"] polygon.inner {
  fill: black;
  stroke: black;
  opacity: 5%;
}

polygon {
  stroke: black;
  /** stroke-width: 0.2; **/
  stroke-linecap: butt;
  fill: black;
}

.debug[debug="true"] polygon,
.debug[debug="true"] line.grid
{
  opacity: 10%;
}

.debug[debug="true"] polygon,
.debug[debug="true"] path,
.debug[debug="true"] circle
{
  opacity: 50%;
}

.debug[debug="true"] polygon {
  fill: red;
  stroke: red;
}

/**
circle {
  fill: black;
}
**/

.debug[debug="true"] circle,
.debug[debug="true"] path
{
  opacity: 50%;
  fill: red;
}

.debug[debug="true"] circle {
  stroke: red;
}

.debug[debug="true"] .inner {
  stroke-width: 0.2;
}

line.part {
  stroke-width: 6;
  stroke-linecap: butt;
  stroke: black;
}

.debug[debug="true"] line.part {
  opacity: 50%;
  stroke: red;
}

.debug[debug="true"] line.center {
  stroke-width: 3;
  stroke-linecap: butt;
  opacity: 10%;
  stroke: black;
}

text::selection {
    fill: black;
    background-color: #EEE;
}
  `;

  svg.appendChild(style);
  
  svg.appendChild(render(diagram));

  if (debug) {
    svg.appendChild(grid(width, height));
  }

  return svg;
}

function around(
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

export default create;


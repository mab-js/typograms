require("./jsdom-setup");
const create = require("../../src/typograms.js");

function renderFixture({ source, zoom, debug }) {
  const svg = create(source, zoom, debug);
  return new XMLSerializer().serializeToString(svg);
}

module.exports = { renderFixture };

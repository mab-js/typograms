const { JSDOM } = require("jsdom");

if (!global.__typogramsJsdom) {
  const dom = new JSDOM("<!doctype html><html><body></body></html>");
  global.document = dom.window.document;
  global.XMLSerializer = dom.window.XMLSerializer;
  global.__typogramsJsdom = dom;
}

module.exports = global.__typogramsJsdom;

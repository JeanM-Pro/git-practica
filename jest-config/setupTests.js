// config/setupTests.js
const { JSDOM } = require('jsdom');

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;

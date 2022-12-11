'use strict';

const isHTMLElement = require('./isHTMLElement.cjs');
require('./isNode.cjs');
require('./isObject.cjs');

const isHTMLImageElement = (element) => isHTMLElement(element) && element.tagName === "IMG" || false;

module.exports = isHTMLImageElement;
//# sourceMappingURL=isHTMLImageElement.cjs.map

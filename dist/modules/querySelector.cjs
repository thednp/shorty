'use strict';

const getDocument = require('./getDocument.cjs');
const isNode = require('./isNode.cjs');
const isHTMLElement = require('./isHTMLElement.cjs');
require('./isWindow.cjs');
require('./isObject.cjs');
require('./isDocument.cjs');

const querySelector = (selector, parent) => {
  if (isHTMLElement(selector)) {
    return selector;
  }
  const lookUp = isNode(parent) ? parent : getDocument();
  return lookUp.querySelector(selector);
};

module.exports = querySelector;
//# sourceMappingURL=querySelector.cjs.map

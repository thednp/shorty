'use strict';

const getDocumentElement = require('./getDocumentElement.cjs');
const isShadowRoot = require('./isShadowRoot.cjs');
const isHTMLElement = require('./isHTMLElement.cjs');
const isNode = require('./isNode.cjs');
require('./getDocument.cjs');
require('./isWindow.cjs');
require('./isObject.cjs');
require('./isDocument.cjs');

const getParentNode = (node) => {
  if (node.nodeName === "HTML") {
    return node;
  }
  return isHTMLElement(node) && node.assignedSlot || isNode(node) && node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
};

module.exports = getParentNode;
//# sourceMappingURL=getParentNode.cjs.map

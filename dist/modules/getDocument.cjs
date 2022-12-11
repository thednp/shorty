'use strict';

const isNode = require('./isNode.cjs');
const isWindow = require('./isWindow.cjs');
const isDocument = require('./isDocument.cjs');
require('./isObject.cjs');

const getDocument = (node) => {
  if (isWindow(node))
    return node.document;
  if (isDocument(node))
    return node;
  if (isNode(node))
    return node.ownerDocument;
  return window.document;
};

module.exports = getDocument;
//# sourceMappingURL=getDocument.cjs.map

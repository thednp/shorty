'use strict';

const isDocument = require('./isDocument.cjs');
const isNode = require('./isNode.cjs');
require('./isObject.cjs');

const getWindow = (node) => {
  if (!node)
    return window;
  if (isDocument(node))
    return node.defaultView;
  if (isNode(node))
    return node?.ownerDocument?.defaultView;
  return node;
};

module.exports = getWindow;
//# sourceMappingURL=getWindow.cjs.map

'use strict';

const getDocument = require('./getDocument.cjs');
require('./isNode.cjs');
require('./isObject.cjs');
require('./isWindow.cjs');
require('./isDocument.cjs');

const getDocumentElement = (node) => {
  return getDocument(node).documentElement;
};

module.exports = getDocumentElement;
//# sourceMappingURL=getDocumentElement.cjs.map

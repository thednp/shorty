'use strict';

const getDocument = require('./getDocument.cjs');
require('./isNode.cjs');
require('./isObject.cjs');
require('./isWindow.cjs');
require('./isDocument.cjs');

const getDocumentHead = (node) => {
  return getDocument(node).head;
};

module.exports = getDocumentHead;
//# sourceMappingURL=getDocumentHead.cjs.map

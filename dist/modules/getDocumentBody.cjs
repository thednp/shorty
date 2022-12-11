'use strict';

const getDocument = require('./getDocument.cjs');
require('./isNode.cjs');
require('./isObject.cjs');
require('./isWindow.cjs');
require('./isDocument.cjs');

const getDocumentBody = (node) => {
  return getDocument(node).body;
};

module.exports = getDocumentBody;
//# sourceMappingURL=getDocumentBody.cjs.map

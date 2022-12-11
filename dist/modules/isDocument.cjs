'use strict';

const isNode = require('./isNode.cjs');
require('./isObject.cjs');

const isDocument = (obj) => isNode(obj) && obj.nodeType === 9 || false;

module.exports = isDocument;
//# sourceMappingURL=isDocument.cjs.map

'use strict';

const getDocumentElement = require('./getDocumentElement.cjs');
require('./getDocument.cjs');
require('./isNode.cjs');
require('./isObject.cjs');
require('./isWindow.cjs');
require('./isDocument.cjs');

const isRTL = (node) => getDocumentElement(node).dir === "rtl";

module.exports = isRTL;
//# sourceMappingURL=isRTL.cjs.map

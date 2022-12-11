'use strict';

const isObject = require('./isObject.cjs');

const isNode = (node) => isObject(node) && typeof node.nodeType === "number" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some((x) => node.nodeType === x) || false;

module.exports = isNode;
//# sourceMappingURL=isNode.cjs.map

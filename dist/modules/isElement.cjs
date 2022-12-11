'use strict';

const isNode = require('./isNode.cjs');
require('./isObject.cjs');

const isElement = (element) => isNode(element) && [1, 2, 3, 4, 5, 6, 7, 8].some((x) => element.nodeType === x) || false;

module.exports = isElement;
//# sourceMappingURL=isElement.cjs.map

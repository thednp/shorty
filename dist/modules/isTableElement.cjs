'use strict';

const isNode = require('./isNode.cjs');
require('./isObject.cjs');

const isTableElement = (element) => isNode(element) && ["TABLE", "TD", "TH"].includes(element.nodeName) || false;

module.exports = isTableElement;
//# sourceMappingURL=isTableElement.cjs.map

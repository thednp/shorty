'use strict';

const isNode = require('./isNode.cjs');
require('./isObject.cjs');

const isSVGElement = (element) => isNode(element) && element.constructor.name.includes("SVG") || false;

module.exports = isSVGElement;
//# sourceMappingURL=isSVGElement.cjs.map

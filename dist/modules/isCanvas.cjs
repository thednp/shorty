'use strict';

const isNode = require('./isNode.cjs');
require('./isObject.cjs');

const isCanvas = (element) => isNode(element) && element.nodeName === "CANVAS" || false;

module.exports = isCanvas;
//# sourceMappingURL=isCanvas.cjs.map

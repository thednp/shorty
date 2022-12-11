'use strict';

const isNode = require('./isNode.cjs');
require('./isObject.cjs');

const isShadowRoot = (element) => isNode(element) && element.constructor.name === "ShadowRoot" || false;

module.exports = isShadowRoot;
//# sourceMappingURL=isShadowRoot.cjs.map

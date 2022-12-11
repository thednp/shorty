'use strict';

const isNode = require('./isNode.cjs');
require('./isObject.cjs');

const isHTMLElement = (element) => isNode(element) && element.nodeType === 1 || false;

module.exports = isHTMLElement;
//# sourceMappingURL=isHTMLElement.cjs.map

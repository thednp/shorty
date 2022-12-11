'use strict';

const isHTMLElement = require('./isHTMLElement.cjs');
const isArray = require('./isArray.cjs');
require('./isNode.cjs');
require('./isObject.cjs');

const isElementsArray = (obj) => isArray(obj) && obj.every(isHTMLElement) || false;

module.exports = isElementsArray;
//# sourceMappingURL=isElementsArray.cjs.map

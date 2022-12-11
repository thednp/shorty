'use strict';

const isCustomElement = require('./isCustomElement.cjs');
const getElementsByTagName = require('./getElementsByTagName.cjs');
require('./isHTMLElement.cjs');
require('./isNode.cjs');
require('./isObject.cjs');
require('./getDocument.cjs');
require('./isWindow.cjs');
require('./isDocument.cjs');

const getCustomElements = (parent) => {
  const collection = getElementsByTagName("*", parent);
  return [...collection].filter(isCustomElement);
};

module.exports = getCustomElements;
//# sourceMappingURL=getCustomElements.cjs.map

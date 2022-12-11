'use strict';

const getDocument = require('./getDocument.cjs');
const isNode = require('./isNode.cjs');
require('./isWindow.cjs');
require('./isObject.cjs');
require('./isDocument.cjs');

const getElementsByTagName = (selector, parent) => {
  const lookUp = isNode(parent) ? parent : getDocument();
  return lookUp.getElementsByTagName(selector);
};

module.exports = getElementsByTagName;
//# sourceMappingURL=getElementsByTagName.cjs.map

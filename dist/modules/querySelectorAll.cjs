'use strict';

const getDocument = require('./getDocument.cjs');
const isNode = require('./isNode.cjs');
require('./isWindow.cjs');
require('./isObject.cjs');
require('./isDocument.cjs');

const querySelectorAll = (selector, parent) => {
  const lookUp = isNode(parent) ? parent : getDocument();
  return lookUp.querySelectorAll(selector);
};

module.exports = querySelectorAll;
//# sourceMappingURL=querySelectorAll.cjs.map

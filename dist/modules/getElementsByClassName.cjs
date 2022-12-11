'use strict';

const getDocument = require('./getDocument.cjs');
const isNode = require('./isNode.cjs');
require('./isWindow.cjs');
require('./isObject.cjs');
require('./isDocument.cjs');

const getElementsByClassName = (selector, parent) => {
  const lookUp = parent && isNode(parent) ? parent : getDocument();
  return lookUp.getElementsByClassName(
    selector
  );
};

module.exports = getElementsByClassName;
//# sourceMappingURL=getElementsByClassName.cjs.map

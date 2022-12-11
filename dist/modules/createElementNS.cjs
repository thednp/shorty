'use strict';

const getDocument = require('./getDocument.cjs');
const ObjectEntries = require('./ObjectEntries.cjs');
const setAttribute = require('./setAttribute.cjs');
const isString = require('./isString.cjs');
require('./isNode.cjs');
require('./isObject.cjs');
require('./isWindow.cjs');
require('./isDocument.cjs');

const createElementNS = (ns, param) => {
  if (!ns || !param)
    return void 0;
  if (isString(param)) {
    return getDocument().createElementNS(ns, param);
  }
  const { tagName } = param;
  const newElement = createElementNS(ns, tagName);
  if (!newElement)
    return void 0;
  const attr = { ...param };
  delete attr.tagName;
  ObjectEntries(attr).forEach(([key, value]) => {
    if (isString(key) && isString(value)) {
      setAttribute(newElement, key, value);
    }
  });
  return newElement;
};

module.exports = createElementNS;
//# sourceMappingURL=createElementNS.cjs.map

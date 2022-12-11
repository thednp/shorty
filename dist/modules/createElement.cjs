'use strict';

const isString = require('./isString.cjs');
const setAttribute = require('./setAttribute.cjs');
const getDocument = require('./getDocument.cjs');
const ObjectEntries = require('./ObjectEntries.cjs');
require('./isNode.cjs');
require('./isObject.cjs');
require('./isWindow.cjs');
require('./isDocument.cjs');

const createElement = (param) => {
  if (!param)
    return void 0;
  if (isString(param)) {
    return getDocument().createElement(param);
  }
  const { tagName } = param;
  const newElement = createElement(tagName);
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

module.exports = createElement;
//# sourceMappingURL=createElement.cjs.map

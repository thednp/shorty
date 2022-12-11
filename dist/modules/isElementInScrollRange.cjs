'use strict';

const getBoundingClientRect = require('./getBoundingClientRect.cjs');
const getDocumentElement = require('./getDocumentElement.cjs');
const isNode = require('./isNode.cjs');
require('./isHTMLElement.cjs');
require('./isObject.cjs');
require('./getDocument.cjs');
require('./isWindow.cjs');
require('./isDocument.cjs');

const isElementInScrollRange = (element) => {
  if (!isNode(element))
    return false;
  const { top, bottom } = getBoundingClientRect(element);
  const { clientHeight } = getDocumentElement(element);
  return top <= clientHeight && bottom >= 0;
};

module.exports = isElementInScrollRange;
//# sourceMappingURL=isElementInScrollRange.cjs.map

'use strict';

const getBoundingClientRect = require('./getBoundingClientRect.cjs');
const getDocumentElement = require('./getDocumentElement.cjs');
const isNode = require('./isNode.cjs');
require('./isHTMLElement.cjs');
require('./isObject.cjs');
require('./getDocument.cjs');
require('./isWindow.cjs');
require('./isDocument.cjs');

const isElementInViewport = (element) => {
  if (!isNode(element))
    return false;
  const { clientWidth, clientHeight } = getDocumentElement(element);
  const { top, left, bottom, right } = getBoundingClientRect(element, true);
  return top >= 0 && left >= 0 && bottom <= clientHeight && right <= clientWidth;
};

module.exports = isElementInViewport;
//# sourceMappingURL=isElementInViewport.cjs.map

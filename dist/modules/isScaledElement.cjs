'use strict';

const isHTMLElement = require('./isHTMLElement.cjs');
const getBoundingClientRect = require('./getBoundingClientRect.cjs');
require('./isNode.cjs');
require('./isObject.cjs');

const isScaledElement = (element) => {
  if (!isHTMLElement(element))
    return false;
  const { width, height } = getBoundingClientRect(element);
  const { offsetWidth, offsetHeight } = element;
  return Math.round(width) !== offsetWidth || Math.round(height) !== offsetHeight;
};

module.exports = isScaledElement;
//# sourceMappingURL=isScaledElement.cjs.map

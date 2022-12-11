'use strict';

const isScaledElement = require('./isScaledElement.cjs');
const isHTMLElement = require('./isHTMLElement.cjs');
const getBoundingClientRect = require('./getBoundingClientRect.cjs');
require('./isNode.cjs');
require('./isObject.cjs');

const getRectRelativeToOffsetParent = (element, offsetParent, scroll) => {
  const isParentAnElement = isHTMLElement(offsetParent);
  const rect = getBoundingClientRect(element, isParentAnElement && isScaledElement(offsetParent));
  const offsets = { x: 0, y: 0 };
  if (isParentAnElement) {
    const offsetRect = getBoundingClientRect(offsetParent, true);
    offsets.x = offsetRect.x + offsetParent.clientLeft;
    offsets.y = offsetRect.y + offsetParent.clientTop;
  }
  return {
    x: rect.left + scroll.x - offsets.x,
    y: rect.top + scroll.y - offsets.y,
    width: rect.width,
    height: rect.height
  };
};

module.exports = getRectRelativeToOffsetParent;
//# sourceMappingURL=getRectRelativeToOffsetParent.cjs.map

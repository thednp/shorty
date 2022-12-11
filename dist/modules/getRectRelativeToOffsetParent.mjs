import isScaledElement from './isScaledElement.mjs';
import isHTMLElement from './isHTMLElement.mjs';
import getBoundingClientRect from './getBoundingClientRect.mjs';
import './isNode.mjs';
import './isObject.mjs';

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

export { getRectRelativeToOffsetParent as default };
//# sourceMappingURL=getRectRelativeToOffsetParent.mjs.map

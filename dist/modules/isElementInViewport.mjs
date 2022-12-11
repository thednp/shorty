import getBoundingClientRect from './getBoundingClientRect.mjs';
import getDocumentElement from './getDocumentElement.mjs';
import isNode from './isNode.mjs';
import './isHTMLElement.mjs';
import './isObject.mjs';
import './getDocument.mjs';
import './isWindow.mjs';
import './isDocument.mjs';

const isElementInViewport = (element) => {
  if (!isNode(element))
    return false;
  const { clientWidth, clientHeight } = getDocumentElement(element);
  const { top, left, bottom, right } = getBoundingClientRect(element, true);
  return top >= 0 && left >= 0 && bottom <= clientHeight && right <= clientWidth;
};

export { isElementInViewport as default };
//# sourceMappingURL=isElementInViewport.mjs.map

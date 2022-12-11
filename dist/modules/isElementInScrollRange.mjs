import getBoundingClientRect from './getBoundingClientRect.mjs';
import getDocumentElement from './getDocumentElement.mjs';
import isNode from './isNode.mjs';
import './isHTMLElement.mjs';
import './isObject.mjs';
import './getDocument.mjs';
import './isWindow.mjs';
import './isDocument.mjs';

const isElementInScrollRange = (element) => {
  if (!isNode(element))
    return false;
  const { top, bottom } = getBoundingClientRect(element);
  const { clientHeight } = getDocumentElement(element);
  return top <= clientHeight && bottom >= 0;
};

export { isElementInScrollRange as default };
//# sourceMappingURL=isElementInScrollRange.mjs.map

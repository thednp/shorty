import getDocument from './getDocument.mjs';
import isNode from './isNode.mjs';
import isHTMLElement from './isHTMLElement.mjs';
import './isWindow.mjs';
import './isObject.mjs';
import './isDocument.mjs';

const querySelector = (selector, parent) => {
  if (isHTMLElement(selector)) {
    return selector;
  }
  const lookUp = isNode(parent) ? parent : getDocument();
  return lookUp.querySelector(selector);
};

export { querySelector as default };
//# sourceMappingURL=querySelector.mjs.map

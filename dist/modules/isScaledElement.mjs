import isHTMLElement from './isHTMLElement.mjs';
import getBoundingClientRect from './getBoundingClientRect.mjs';
import './isNode.mjs';
import './isObject.mjs';

const isScaledElement = (element) => {
  if (!isHTMLElement(element))
    return false;
  const { width, height } = getBoundingClientRect(element);
  const { offsetWidth, offsetHeight } = element;
  return Math.round(width) !== offsetWidth || Math.round(height) !== offsetHeight;
};

export { isScaledElement as default };
//# sourceMappingURL=isScaledElement.mjs.map

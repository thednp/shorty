import isCustomElement from './isCustomElement.mjs';
import getElementsByTagName from './getElementsByTagName.mjs';
import './isHTMLElement.mjs';
import './isNode.mjs';
import './isObject.mjs';
import './getDocument.mjs';
import './isWindow.mjs';
import './isDocument.mjs';

const getCustomElements = (parent) => {
  const collection = getElementsByTagName("*", parent);
  return [...collection].filter(isCustomElement);
};

export { getCustomElements as default };
//# sourceMappingURL=getCustomElements.mjs.map

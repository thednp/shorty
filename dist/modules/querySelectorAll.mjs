import getDocument from './getDocument.mjs';
import isNode from './isNode.mjs';
import './isWindow.mjs';
import './isObject.mjs';
import './isDocument.mjs';

const querySelectorAll = (selector, parent) => {
  const lookUp = isNode(parent) ? parent : getDocument();
  return lookUp.querySelectorAll(selector);
};

export { querySelectorAll as default };
//# sourceMappingURL=querySelectorAll.mjs.map

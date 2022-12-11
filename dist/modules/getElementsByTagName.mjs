import getDocument from './getDocument.mjs';
import isNode from './isNode.mjs';
import './isWindow.mjs';
import './isObject.mjs';
import './isDocument.mjs';

const getElementsByTagName = (selector, parent) => {
  const lookUp = isNode(parent) ? parent : getDocument();
  return lookUp.getElementsByTagName(selector);
};

export { getElementsByTagName as default };
//# sourceMappingURL=getElementsByTagName.mjs.map

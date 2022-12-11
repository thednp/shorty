import getDocument from './getDocument.mjs';
import isNode from './isNode.mjs';
import './isWindow.mjs';
import './isObject.mjs';
import './isDocument.mjs';

const getElementsByClassName = (selector, parent) => {
  const lookUp = parent && isNode(parent) ? parent : getDocument();
  return lookUp.getElementsByClassName(
    selector
  );
};

export { getElementsByClassName as default };
//# sourceMappingURL=getElementsByClassName.mjs.map

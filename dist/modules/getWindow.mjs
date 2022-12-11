import isDocument from './isDocument.mjs';
import isNode from './isNode.mjs';
import './isObject.mjs';

const getWindow = (node) => {
  if (!node)
    return window;
  if (isDocument(node))
    return node.defaultView;
  if (isNode(node))
    return node?.ownerDocument?.defaultView;
  return node;
};

export { getWindow as default };
//# sourceMappingURL=getWindow.mjs.map

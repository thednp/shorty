import isNode from './isNode.mjs';
import isWindow from './isWindow.mjs';
import isDocument from './isDocument.mjs';
import './isObject.mjs';

const getDocument = (node) => {
  if (isWindow(node))
    return node.document;
  if (isDocument(node))
    return node;
  if (isNode(node))
    return node.ownerDocument;
  return window.document;
};

export { getDocument as default };
//# sourceMappingURL=getDocument.mjs.map

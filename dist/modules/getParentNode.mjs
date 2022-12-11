import getDocumentElement from './getDocumentElement.mjs';
import isShadowRoot from './isShadowRoot.mjs';
import isHTMLElement from './isHTMLElement.mjs';
import isNode from './isNode.mjs';
import './getDocument.mjs';
import './isWindow.mjs';
import './isObject.mjs';
import './isDocument.mjs';

const getParentNode = (node) => {
  if (node.nodeName === "HTML") {
    return node;
  }
  return isHTMLElement(node) && node.assignedSlot || isNode(node) && node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
};

export { getParentNode as default };
//# sourceMappingURL=getParentNode.mjs.map

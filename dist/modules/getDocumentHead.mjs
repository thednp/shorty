import getDocument from './getDocument.mjs';
import './isNode.mjs';
import './isObject.mjs';
import './isWindow.mjs';
import './isDocument.mjs';

const getDocumentHead = (node) => {
  return getDocument(node).head;
};

export { getDocumentHead as default };
//# sourceMappingURL=getDocumentHead.mjs.map

import getDocument from './getDocument.mjs';
import './isNode.mjs';
import './isObject.mjs';
import './isWindow.mjs';
import './isDocument.mjs';

const getDocumentBody = (node) => {
  return getDocument(node).body;
};

export { getDocumentBody as default };
//# sourceMappingURL=getDocumentBody.mjs.map

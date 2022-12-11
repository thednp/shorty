import getDocument from './getDocument.mjs';
import './isNode.mjs';
import './isObject.mjs';
import './isWindow.mjs';
import './isDocument.mjs';

const getDocumentElement = (node) => {
  return getDocument(node).documentElement;
};

export { getDocumentElement as default };
//# sourceMappingURL=getDocumentElement.mjs.map

import getDocumentElement from './getDocumentElement.mjs';
import './getDocument.mjs';
import './isNode.mjs';
import './isObject.mjs';
import './isWindow.mjs';
import './isDocument.mjs';

const isRTL = (node) => getDocumentElement(node).dir === "rtl";

export { isRTL as default };
//# sourceMappingURL=isRTL.mjs.map

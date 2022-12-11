import isNode from './isNode.mjs';
import './isObject.mjs';

const isDocument = (obj) => isNode(obj) && obj.nodeType === 9 || false;

export { isDocument as default };
//# sourceMappingURL=isDocument.mjs.map

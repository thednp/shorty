import isNode from './isNode.mjs';
import './isObject.mjs';

const isElement = (element) => isNode(element) && [1, 2, 3, 4, 5, 6, 7, 8].some((x) => element.nodeType === x) || false;

export { isElement as default };
//# sourceMappingURL=isElement.mjs.map

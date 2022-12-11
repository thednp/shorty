import isNode from './isNode.mjs';
import './isObject.mjs';

const isHTMLElement = (element) => isNode(element) && element.nodeType === 1 || false;

export { isHTMLElement as default };
//# sourceMappingURL=isHTMLElement.mjs.map

import isNode from './isNode.mjs';
import './isObject.mjs';

const isTableElement = (element) => isNode(element) && ["TABLE", "TD", "TH"].includes(element.nodeName) || false;

export { isTableElement as default };
//# sourceMappingURL=isTableElement.mjs.map

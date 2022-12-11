import isNode from './isNode.mjs';
import './isObject.mjs';

const isSVGElement = (element) => isNode(element) && element.constructor.name.includes("SVG") || false;

export { isSVGElement as default };
//# sourceMappingURL=isSVGElement.mjs.map

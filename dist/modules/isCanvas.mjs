import isNode from './isNode.mjs';
import './isObject.mjs';

const isCanvas = (element) => isNode(element) && element.nodeName === "CANVAS" || false;

export { isCanvas as default };
//# sourceMappingURL=isCanvas.mjs.map

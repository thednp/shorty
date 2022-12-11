import isNode from './isNode.mjs';
import './isObject.mjs';

const isShadowRoot = (element) => isNode(element) && element.constructor.name === "ShadowRoot" || false;

export { isShadowRoot as default };
//# sourceMappingURL=isShadowRoot.mjs.map

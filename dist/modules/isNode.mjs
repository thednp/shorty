import isObject from './isObject.mjs';

const isNode = (node) => isObject(node) && typeof node.nodeType === "number" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some((x) => node.nodeType === x) || false;

export { isNode as default };
//# sourceMappingURL=isNode.mjs.map

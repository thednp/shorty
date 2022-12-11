import isObject from './isObject.mjs';

const isNodeList = (obj) => isObject(obj) && obj.constructor.name === "NodeList" || false;

export { isNodeList as default };
//# sourceMappingURL=isNodeList.mjs.map

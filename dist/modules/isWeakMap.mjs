import isObject from './isObject.mjs';

const isWeakMap = (obj) => isObject(obj) && obj.constructor.name === "WeakMap" || false;

export { isWeakMap as default };
//# sourceMappingURL=isWeakMap.mjs.map

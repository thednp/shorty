import isObject from './isObject.mjs';

const isMap = (obj) => isObject(obj) && obj.constructor.name === "Map" || false;

export { isMap as default };
//# sourceMappingURL=isMap.mjs.map

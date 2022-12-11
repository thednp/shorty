import isObject from './isObject.mjs';

const isWindow = (obj) => isObject(obj) && obj.constructor.name === "Window" || false;

export { isWindow as default };
//# sourceMappingURL=isWindow.mjs.map

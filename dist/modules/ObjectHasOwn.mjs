import isObject from './isObject.mjs';

const ObjectHasOwn = (obj, prop) => isObject(obj) && (Object.hasOwn(obj, prop) || prop in obj);

export { ObjectHasOwn as default };
//# sourceMappingURL=ObjectHasOwn.mjs.map

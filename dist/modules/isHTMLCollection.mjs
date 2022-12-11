import isObject from './isObject.mjs';

const isHTMLCollection = (obj) => isObject(obj) && obj.constructor.name === "HTMLCollection" || false;

export { isHTMLCollection as default };
//# sourceMappingURL=isHTMLCollection.mjs.map

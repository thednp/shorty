import isHTMLElement from './isHTMLElement.mjs';
import './isNode.mjs';
import './isObject.mjs';

const isHTMLImageElement = (element) => isHTMLElement(element) && element.tagName === "IMG" || false;

export { isHTMLImageElement as default };
//# sourceMappingURL=isHTMLImageElement.mjs.map

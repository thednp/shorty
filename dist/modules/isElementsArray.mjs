import isHTMLElement from './isHTMLElement.mjs';
import isArray from './isArray.mjs';
import './isNode.mjs';
import './isObject.mjs';

const isElementsArray = (obj) => isArray(obj) && obj.every(isHTMLElement) || false;

export { isElementsArray as default };
//# sourceMappingURL=isElementsArray.mjs.map

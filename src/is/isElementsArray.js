import isHTMLElement from './isHTMLElement';
import isArray from './isArray';
/**
 * Checks if an object is an `Array` in which all items are `Element`.
 *
 * @param obj the target object
 * @returns the query result
 */
const isElementsArray = (obj) => (isArray(obj) && obj.every(isHTMLElement)) || false;
export default isElementsArray;
//# sourceMappingURL=isElementsArray.js.map
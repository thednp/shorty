import isHTMLElement from './isHTMLElement';

/**
 * Checks if an object is an `Array` in which all items are `Element`.
 *
 * @param {any} object the target object
 * @returns {boolean} the query result
 */
const isElementsArray = (object) => Array.isArray(object)
  && object.every(isHTMLElement);

export default isElementsArray;

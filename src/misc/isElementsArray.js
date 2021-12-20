import isElement from './isElement';

/**
 * Checks if an object is an `Array` in which all items are `Element`.
 *
 * @param {any} object the target object
 * @returns {boolean} the query result
 */
export default function isElementsArray(object) {
  return Array.isArray(object) && object.every((el) => isElement(el));
}

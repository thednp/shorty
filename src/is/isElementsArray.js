/**
 * Checks if an object is an `Array` in which all items are `Element`.
 *
 * @param {any} object the target object
 * @returns {boolean} the query result
 */
const isElementsArray = (object) => Array.isArray(object)
  && object.every((el) => [HTMLElement, Element].some((x) => el instanceof x));

export default isElementsArray;

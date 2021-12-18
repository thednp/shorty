/**
 * Checks if an object is an `Element`.
 *
 * @param {any} element the target object
 * @returns {boolean} the query result
 */
export default function isElement(element) {
  return element instanceof Element;
}

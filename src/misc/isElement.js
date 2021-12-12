/**
 * Checks if an element is an `Element`.
 *
 * @param {any} element the target element
 * @returns {boolean} the query result
 */
export default function isElement(element) {
  return element instanceof Element;
}

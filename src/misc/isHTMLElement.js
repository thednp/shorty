/**
 * Checks if an element is an `HTMLElement`.
 *
 * @param {any} element the target element
 * @returns {boolean} the query result
 */
export default function isHTMLElement(element) {
  return element instanceof HTMLElement;
}

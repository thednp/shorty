/**
 * Shortcut for `HTMLElement.closest` method.
 *
 * @param {HTMLElement} element optional Element to look into
 * @param {string} selector the selector name
 * @return {HTMLElement?} the query result
 */
export default function closest(element, selector) {
  if (element && selector) return element.closest(selector);
  return null;
}

/**
 * Checks if an element is an `HTMLElement`.
 *
 * @param {any} element the target object
 * @returns {boolean} the query result
 */
const isHTMLElement = (element) => element && element instanceof HTMLElement;
export default isHTMLElement;

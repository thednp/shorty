/**
 * Checks if an element is an `HTMLElement`.
 *
 * @param {any} element the target object
 * @returns {boolean} the query result
 */
const isHTMLElement = (element) => typeof element === 'object' && element instanceof HTMLElement;
export default isHTMLElement;

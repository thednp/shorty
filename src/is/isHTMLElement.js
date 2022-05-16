/**
 * Checks if an element is an `HTMLElement`.
 * @see https://dom.spec.whatwg.org/#node
 *
 * @param {any} element the target object
 * @returns {boolean} the query result
 */
const isHTMLElement = (element) => (element && element.nodeType === 1) || false;
export default isHTMLElement;

/**
 * Checks if an object is a `CustomElement`.
 *
 * @param {any} element the target object
 * @returns {boolean} the query result
 */
const isCustomElement = (element) => (element && !!element.shadowRoot) || false;
export default isCustomElement;

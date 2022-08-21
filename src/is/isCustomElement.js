/**
 * Checks if an object is a `CustomElement`.
 *
 * @param element the target object
 * @returns the query result
 */
const isCustomElement = (element) => (element && !!element.shadowRoot) || false;
export default isCustomElement;
//# sourceMappingURL=isCustomElement.js.map
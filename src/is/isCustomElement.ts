/**
 * Checks if an object is a `CustomElement`.
 *
 * @param element the target object
 * @returns the query result
 */
const isCustomElement = <T extends HTMLElement & { shadowRoot: Node }>(
  element?: any
): element is T => (element && !!element.shadowRoot) || false;
export default isCustomElement;

import CustomElement from "../interface/customElement";

/**
 * Checks if an object is a `CustomElement`.
 *
 * @param element the target object
 * @returns the query result
 */
const isCustomElement = <T extends CustomElement>(element?: any): element is T =>
  (element && !!element.shadowRoot) || false;

export default isCustomElement;

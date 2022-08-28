import { CustomElement } from '../interface/customElement';

/**
 * Checks if an object is a `CustomElement`.
 *
 * @param element the target object
 * @returns the query result
 */
const isCustomElement = <T extends CustomElement>(element?: T | Node): element is T =>
  (element && !!(element as CustomElement).shadowRoot) || false;

export default isCustomElement;

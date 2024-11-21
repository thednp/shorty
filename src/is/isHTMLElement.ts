import isElement from "./isElement";

/**
 * Checks if an element is an `HTMLElement`.
 *
 * @see https://dom.spec.whatwg.org/#node
 *
 * @param element the target object
 * @returns the query result
 */
const isHTMLElement = (element?: unknown): element is HTMLElement =>
  (isElement(element) && "offsetWidth" in element) || false;
export default isHTMLElement;

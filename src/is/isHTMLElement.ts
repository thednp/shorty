/**
 * Checks if an element is an `HTMLElement`.
 *
 * @see https://dom.spec.whatwg.org/#node
 *
 * @param element the target object
 * @returns the query result
 */
const isHTMLElement = (element?: HTMLElement | Node): element is HTMLElement =>
  (element && element.nodeType === 1) || false;
export default isHTMLElement;

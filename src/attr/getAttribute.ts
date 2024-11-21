/**
 * Shortcut for `Element.getAttribute()` method.
 *
 * @param element target element
 * @param att attribute name
 * @returns attribute value
 */
const getAttribute = (element: Element, att: string): string | null =>
  element.getAttribute(att);

export default getAttribute;

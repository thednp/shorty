/**
 * Shortcut for `Element.setAttribute()` method.
 *
 * @param element target element
 * @param att attribute name
 * @param value attribute value
 */
const setAttribute = (element: Element, att: string, value: string) =>
  element.setAttribute(att, value);

export default setAttribute;

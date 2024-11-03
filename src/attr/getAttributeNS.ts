/**
 * Shortcut for `Element.getAttributeNS()` method.
 *
 * @param ns attribute namespace
 * @param element target element
 * @param att attribute name
 * @returns attribute value
 */
const getAttributeNS = (ns: string, element: Element, att: string) =>
  element.getAttributeNS(ns, att);

export default getAttributeNS;

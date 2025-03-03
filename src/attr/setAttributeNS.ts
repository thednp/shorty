/**
 * Shortcut for `Element.setAttributeNS()` method.
 *
 * @param ns attribute namespace
 * @param element target element
 * @param att attribute name
 * @param value attribute value
 */
const setAttributeNS = (
  ns: string,
  element: Element,
  att: string,
  value: string,
): void => element.setAttributeNS(ns, att, value);

export default setAttributeNS;

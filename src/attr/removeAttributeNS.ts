/**
 * Shortcut for `Element.removeAttributeNS()` method.
 *
 * @param ns attribute namespace
 * @param  element target element
 * @param att attribute name
 */
const removeAttributeNS = (
  ns: string,
  element: Element,
  att: string,
): void => element.removeAttributeNS(ns, att);

export default removeAttributeNS;

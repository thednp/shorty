/**
 * Shortcut for `Element.hasAttributeNS()` method.
 *
 * @param ns attribute namespace
 * @param element target element
 * @param att attribute name
 * @returns the query result
 */
const hasAttributeNS = (
  ns: string,
  element: Element,
  att: string,
): boolean => element.hasAttributeNS(ns, att);

export default hasAttributeNS;

/**
 * Shortcut for `Element.hasAttribute()` method.
 *
 * @param element target element
 * @param att attribute name
 * @returns the query result
 */
const hasAttribute = (element: Element, att: string): boolean =>
  element.hasAttribute(att);

export default hasAttribute;

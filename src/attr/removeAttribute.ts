/**
 * Shortcut for `Element.removeAttribute()` method.
 *
 * @param element target element
 * @param att attribute name
 */
const removeAttribute = (element: Element, att: string): void =>
  element.removeAttribute(att);

export default removeAttribute;

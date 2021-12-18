/**
 * Shortcut for `window.getComputedStyle(element).propertyName`
 * static method.
 * * If `element` parameter is not an `Element`, `getComputedStyle`
 * throws a `ReferenceError`.
 * * If no property is defined, the entire `CSSStyleDeclaration`
 * instance is returned.
 *
 * @param {Element} element target
 * @param {string=} property the css property
 * @return {string} the css property value
 */
export default function getElementStyle(element, property) {
  const computedStyle = getComputedStyle(element);

  return property && property in computedStyle
    ? computedStyle[property]
    : computedStyle;
}

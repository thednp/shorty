/**
 * Shortcut for `window.getComputedStyle(element).propertyName`
 * static method.
 *
 * * If `element` parameter is not an `HTMLElement`, `getComputedStyle`
 * throws a `ReferenceError`.
 *
 * @param {HTMLElement} element target
 * @param {string} property the css property
 * @return {string} the css property value
 */
export default function getElementStyle(element, property) {
  const computedStyle = getComputedStyle(element);

  // must use camelcase strings,
  // or non-camelcase strings with `getPropertyValue`
  return property.includes('--')
    ? computedStyle.getPropertyValue(property)
    : computedStyle[property];
}

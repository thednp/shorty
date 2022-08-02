import CSS4Declaration from "../interface/css4Declaration";

/**
 * Shortcut for `window.getComputedStyle(element).propertyName`
 * static method.
 *
 * * If `element` parameter is not an `HTMLElement`, `getComputedStyle`
 * throws a `ReferenceError`.
 *
 * @param element target
 * @param property the css property
 * @return the css property value
 */
const getElementStyle = (element: HTMLElement, property: string): string => {
  const computedStyle: CSS4Declaration = getComputedStyle(element);

  // must use camelcase strings,
  // or non-camelcase strings with `getPropertyValue`
  return property.includes("--")
    ? computedStyle.getPropertyValue(property)
    : computedStyle[property];
};

export default getElementStyle;

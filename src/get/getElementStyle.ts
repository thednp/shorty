// import CSS4Declaration from "../interface/css4Declaration";

/**
 * Shortcut for `window.getComputedStyle(element).propertyName`
 * static method.
 *
 * * If `element` parameter is not an `Element`, `getComputedStyle`
 * throws a `ReferenceError`.
 *
 * @param element target `Element`
 * @param property the css property
 * @param pseudoElt pseudo-elements
 * @return the css property value
 */
const getElementStyle = (
  element: Element,
  property: string,
  pseudoElt?: string | null,
): string => {
  const computedStyle = getComputedStyle(element, pseudoElt);
  const prop = property
    .replace("webkit", "Webkit")
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase();

  // modern browsers only
  return computedStyle.getPropertyValue(prop);
};

export default getElementStyle;

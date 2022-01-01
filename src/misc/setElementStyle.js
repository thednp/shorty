import ObjectAssign from './ObjectAssign';

/**
 * Shortcut for `HTMLElement.style.propertyName` method.
 * @param  {HTMLElement} element target element
 * @param  {Partial<CSSStyleDeclaration>} styles attribute value
 */
const setElementStyle = (element, styles) => ObjectAssign(element.style, styles);
export default setElementStyle;

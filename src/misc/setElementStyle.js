import ObjectAssign from './ObjectAssign';

/**
 * Shortcut for `HTMLElement.style.propertyName` method.
 * @param  {HTMLElement} element target element
 * @param  {Record<string, string>} styles attribute value
 */
const setElementStyle = (element, styles) => ObjectAssign(element.style, styles);
export default setElementStyle;

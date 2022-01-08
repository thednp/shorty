import ObjectAssign from './ObjectAssign';

/**
 * Shortcut for multiple uses of `HTMLElement.style.propertyName` method.
 * @param  {SHORTER.ElementNodes} element target element
 * @param  {Partial<CSSStyleDeclaration>} styles attribute value
 */
// @ts-ignore
const setElementStyle = (element, styles) => { ObjectAssign(element.style, styles); };
export default setElementStyle;

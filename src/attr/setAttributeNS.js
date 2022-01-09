/**
 * Shortcut for `SVGElement.setAttributeNS()` method.
 * @param  {HTMLElement | Element} element target element
 * @param  {string} att attribute name
 * @param  {string} value attribute value
 * @param  {string=} ns attribute namespace
 */
const setAttributeNS = (element, att, value, ns) => element.setAttributeNS(ns || null, att, value);

export default setAttributeNS;

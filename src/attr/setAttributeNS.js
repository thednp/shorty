/**
 * Shortcut for `SVGElement.setAttributeNS()` method.
 * @param  {string} ns attribute namespace
 * @param  {HTMLElement} element target element
 * @param  {string} att attribute name
 * @param  {string} value attribute value
 * @returns {void}
 */
const setAttributeNS = (ns, element, att, value) => element.setAttributeNS(ns, att, value);

export default setAttributeNS;

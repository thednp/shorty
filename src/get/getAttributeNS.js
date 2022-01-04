/**
 * Shortcut for `SVGElement.getAttributeNS()` method.
 * @param  {HTMLElement} element target element
 * @param  {string} attribute attribute name
 * @param  {string=} ns attribute namespace
 */
const getAttributeNS = (element, attribute, ns) => element.getAttributeNS(ns || null, attribute);

export default getAttributeNS;

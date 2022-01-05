/**
 * Shortcut for `SVGElement.hasAttributeNS()` method.
 * @param  {HTMLElement} element target element
 * @param  {string} att attribute name
 * @param  {string=} ns attribute namespace
 */
const hasAttributeNS = (element, att, ns) => element.hasAttributeNS(ns || null, att);

export default hasAttributeNS;

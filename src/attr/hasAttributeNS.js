/**
 * Shortcut for `SVGElement.hasAttributeNS()` method.
 * @param  {SHORTER.ElementNodes} element target element
 * @param  {string} att attribute name
 * @param  {string=} ns attribute namespace
 */
const hasAttributeNS = (element, att, ns) => element.hasAttributeNS(ns || null, att);

export default hasAttributeNS;

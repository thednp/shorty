/**
 * Shortcut for `HTMLElement.removeAttributeNS()` method.
 * @param  {SHORTER.ElementNodes} element target element
 * @param  {string} att attribute name
 * @param  {string=} ns attribute namespace
 */
const removeAttributeNS = (element, att, ns) => element.removeAttributeNS(ns || null, att);

export default removeAttributeNS;

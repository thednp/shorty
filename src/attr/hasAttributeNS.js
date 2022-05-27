/**
 * Shortcut for `HTMLElement.hasAttributeNS()` method.
 * @param  {string} ns attribute namespace
 * @param  {HTMLElement} element target element
 * @param  {string} att attribute name
 * @returns {boolean} the query result
 */
const hasAttributeNS = (ns, element, att) => element.hasAttributeNS(ns, att);

export default hasAttributeNS;

/**
 * Shortcut for `HTMLElement.removeAttributeNS()` method.
 * @param  {string} ns attribute namespace
 * @param  {HTMLElement} element target element
 * @param  {string} att attribute name
 * @returns {void}
 */
const removeAttributeNS = (ns, element, att) => element.removeAttributeNS(ns, att);

export default removeAttributeNS;

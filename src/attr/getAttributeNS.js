/**
 * Shortcut for `HTMLElement.getAttributeNS()` method.
 * @param {string} ns attribute namespace
 * @param {HTMLElement} element target element
 * @param {string} attribute attribute name
 * @returns {string?} attribute value
 */
const getAttributeNS = (ns, element, attribute) => element.getAttributeNS(ns, attribute);

export default getAttributeNS;

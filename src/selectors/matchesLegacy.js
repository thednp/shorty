// @ts-nocheck
const ElementProto = Element.prototype;
const matchesFn = ElementProto.matches
  || ElementProto.matchesSelector
  || ElementProto.webkitMatchesSelector
  || ElementProto.mozMatchesSelector
  || ElementProto.msMatchesSelector
  || ElementProto.oMatchesSelector
  || function matchesNotSupported() {
    return false;
  };

/**
 * Check if element matches a CSS selector,
 * supporting a range of legacy browsers.
 *
 * @param {HTMLElement | Element} target
 * @param {string} selector
 * @returns {boolean}
 */
export default function matches(target, selector) {
  return matchesFn.call(target, selector);
}

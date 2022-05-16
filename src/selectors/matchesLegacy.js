const ElementProto = Element.prototype;

const matchesFn = ElementProto.matches
  || /* istanbul ignore next */ ElementProto.matchesSelector
  || /* istanbul ignore next */ ElementProto.webkitMatchesSelector
  || /* istanbul ignore next */ ElementProto.mozMatchesSelector
  || /* istanbul ignore next */ ElementProto.msMatchesSelector
  || /* istanbul ignore next */ ElementProto.oMatchesSelector
  || /* istanbul ignore next */ function matchesNotSupported() {
    return false;
  };

/**
 * Check if element matches a CSS selector,
 * supporting a range of legacy browsers.
 *
 * @param {HTMLElement} target
 * @param {string} selector
 * @returns {boolean}
 */
export default function matches(target, selector) {
  return matchesFn.call(target, selector);
}

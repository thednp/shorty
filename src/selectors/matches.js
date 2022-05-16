/**
 * Check if element matches a CSS selector.
 *
 * @param {HTMLElement} target
 * @param {string} selector
 * @returns {boolean}
 */
export default function matches(target, selector) {
  return target.matches(selector);
}

import getBoundingClientRect from '../get/getBoundingClientRect';

/**
 * Checks if a target `HTMLElement` is affected by scale.
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param {HTMLElement} element target
 * @returns {boolean} the query result
 */
export default function isScaledElement(element) {
  const { width, height } = getBoundingClientRect(element);
  const { offsetWidth, offsetHeight } = element;
  return Math.round(width) !== offsetWidth
    || Math.round(height) !== offsetHeight;
}

import getBoundingClientRect from '../get/getBoundingClientRect';

/**
 * Checks if a target `HTMLElement` is affected by scale.
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param {HTMLElement} element target
 * @returns {boolean} the query result
 */
export default function isScaledElement(element) {
  const rect = getBoundingClientRect(element);
  return Math.round(rect.width) !== element.offsetWidth
    || Math.round(rect.height) !== element.offsetHeight;
}

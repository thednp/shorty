import getBoundingClientRect from '../get/getBoundingClientRect';

/**
 * Checks if a target `HTMLElement` is affected by scale.
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param {SHORTER.ElementNodes} element target
 * @returns {boolean} the query result
 */
export default function isScaledElement(element) {
  const { width, height } = getBoundingClientRect(element);
  // @ts-ignore -- our elements usually have offset properties
  const { offsetWidth, offsetHeight } = element;
  return Math.round(width) !== offsetWidth
    || Math.round(height) !== offsetHeight;
}

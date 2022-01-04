import getBoundingClientRect from '../get/getBoundingClientRect';

/**
 * Utility to determine if an `HTMLElement`
 * is fully visible in the viewport.
 *
 * @param {HTMLElement} element target
 * @return {boolean} the query result
 */
const isElementInViewport = (element) => {
  const bcr = getBoundingClientRect(element, true);
  return (
    bcr.top >= 0
    && bcr.left >= 0
    && bcr.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    && bcr.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
export default isElementInViewport;

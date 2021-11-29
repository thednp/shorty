/**
 * Utility to determine if an `Element`
 * is fully visible in the viewport.
 *
 * @param {Element} element target
 * @return {boolean} Boolean
 */
export default function isElementInViewport(element) {
  const bcr = element.getBoundingClientRect();
  return (
    bcr.top >= 0
    && bcr.left >= 0
    && bcr.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    && bcr.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

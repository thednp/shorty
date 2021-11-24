/**
 * Utility to determine if an `Element`
 * is partially visible in viewport.
 *
 * @param {HTMLElement} element target
 * @return {boolean} Boolean
 */
export default function isElementInScrollRange(element) {
  const bcr = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return bcr.top <= viewportHeight && bcr.bottom >= 0; // bottom && top
}

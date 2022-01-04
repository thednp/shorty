/**
 * Utility to determine if an `HTMLElement`
 * is partially visible in viewport.
 *
 * @param {HTMLElement} element target
 * @return {boolean} the query result
 */
const isElementInScrollRange = (element) => {
  const bcr = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  return bcr.top <= viewportHeight && bcr.bottom >= 0; // bottom && top
};

export default isElementInScrollRange;

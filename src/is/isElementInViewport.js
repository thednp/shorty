import getBoundingClientRect from '../get/getBoundingClientRect';
import getDocumentElement from '../get/getDocumentElement';

/**
 * Utility to determine if an `HTMLElement`
 * is fully visible in the viewport.
 *
 * @param {HTMLElement} element target
 * @return {boolean} the query result
 */
const isElementInViewport = (element) => {
  const {
    top, left, bottom, right,
  } = getBoundingClientRect(element, true);
  const { clientWidth, clientHeight } = getDocumentElement(element);
  return (
    top >= 0 && left >= 0
    && bottom <= clientHeight
    && right <= clientWidth
  );
};
export default isElementInViewport;

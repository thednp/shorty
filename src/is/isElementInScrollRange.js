import getBoundingClientRect from '../get/getBoundingClientRect';
import getDocumentElement from '../get/getDocumentElement';

/**
 * Utility to determine if an `HTMLElement`
 * is partially visible in viewport.
 *
 * @param {HTMLElement | Element} element target
 * @return {boolean} the query result
 */
const isElementInScrollRange = (element) => {
  const { top, bottom } = getBoundingClientRect(element);
  const { clientHeight } = getDocumentElement(element);
  // checks bottom && top
  return top <= clientHeight && bottom >= 0;
};

export default isElementInScrollRange;

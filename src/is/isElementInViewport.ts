import getBoundingClientRect from "../get/getBoundingClientRect";
import getDocumentElement from "../get/getDocumentElement";
import isElement from "./isElement";

/**
 * Utility to determine if an `Element`
 * is fully visible in the viewport.
 *
 * @param element target
 * @return the query result
 */
const isElementInViewport = (element?: Element): boolean => {
  if (!isElement(element)) return false;

  const { clientWidth, clientHeight } = getDocumentElement(element);
  const { top, left, bottom, right } = getBoundingClientRect(element, true);

  return top >= 0 && left >= 0 && bottom <= clientHeight &&
    right <= clientWidth;
};
export default isElementInViewport;

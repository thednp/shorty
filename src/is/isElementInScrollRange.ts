import getBoundingClientRect from "../get/getBoundingClientRect.ts";
import getDocumentElement from "../get/getDocumentElement.ts";
import isNode from "./isNode.ts";

/**
 * Utility to determine if an `Element`
 * is partially visible in viewport.
 *
 * @param element target
 * @return the query result
 */
const isElementInScrollRange = (element?: Element): boolean => {
  if (!isNode(element)) return false;

  const { top, bottom } = getBoundingClientRect(element);
  const { clientHeight } = getDocumentElement(element);
  return top <= clientHeight && bottom >= 0;
};

export default isElementInScrollRange;

import isHTMLElement from "./isHTMLElement.ts";
import getBoundingClientRect from "../get/getBoundingClientRect.ts";

/**
 * Checks if a target `Element` is affected by scale.
 *
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param element target
 * @returns the query result
 */
const isScaledElement = (element?: Element): boolean => {
  if (!isHTMLElement(element)) return false;
  const { width, height } = getBoundingClientRect(element);
  const { offsetWidth, offsetHeight } = element;
  return Math.round(width) !== offsetWidth ||
    Math.round(height) !== offsetHeight;
};

export default isScaledElement;

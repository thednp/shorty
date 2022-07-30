import setAttribute from "../attr/setAttribute";
import getDocument from "../get/getDocument";
import ObjectEntries from "./ObjectEntries";

/**
 * This is a shortie for `document.createElement` method
 * which allows you to create a new `HTMLElement` for a given `tagName`
 * or based on an object with specific non-readonly attributes:
 * `id`, `className`, `textContent`, `style`, etc.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 *
 * @param param `tagName` or object
 * @return a new `HTMLElement` or `Element`
 */
const createElement = (param?: string | Partial<HTMLElement>): HTMLElement | undefined => {
  if (!param) return undefined;

  if (typeof param === "string") {
    return getDocument().createElement(param);
  }

  const { tagName } = param;
  const newElement = createElement(tagName);

  if (!newElement) return undefined;

  const attr = { ...param };
  delete attr.tagName;

  ObjectEntries(attr).forEach(([key, value]) => {
    setAttribute(newElement, key, value);
  });
  return newElement;
};

export default createElement;

import isNode from "./isNode";

/**
 * Checks if an object is an `Element`.
 *
 * @param element the target object
 * @returns the query result
 */
const isElement = (element?: unknown): element is Element =>
  (isNode(element) && element.nodeType === 1) || false;

export default isElement;

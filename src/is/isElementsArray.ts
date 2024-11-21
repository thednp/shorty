import isElement from "./isElement";
import isArray from "./isArray";

/**
 * Checks if an object is an `Array` in which all items are `Element`.
 *
 * @param obj the target object
 * @returns the query result
 */
const isElementsArray = (obj?: unknown): obj is Element[] =>
  (isArray(obj) && obj.every(isElement)) || false;

export default isElementsArray;

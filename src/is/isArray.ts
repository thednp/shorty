/**
 * Shortie for the `Array.isArray()` static method.
 *
 * @param obj array-like iterable object
 * @returns the query result
 */
const isArray = (obj?: unknown): obj is unknown[] =>
  Array.isArray(obj) || false;

export default isArray;

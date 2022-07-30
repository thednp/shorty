/**
 * Shortcut for `Array.isArray()` static method.
 *
 * @param arr array-like iterable object
 * @returns the query result
 */
const isArray = (arr?: any): arr is any[] => Array.isArray(arr) || false;

export default isArray;

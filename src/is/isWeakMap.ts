/**
 * Checks if an element is a `WeakMap`.
 *
 * @param obj the target object
 * @returns the query result
 */
const isWeakMap = (obj?: any): obj is WeakMap<any, any> =>
  (obj && obj.constructor.name === 'WeakMap') || false;
export default isWeakMap;

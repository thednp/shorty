/**
 * Checks if an element is a `WeakMap`.
 *
 * @param obj the target object
 * @returns the query result
 */
const isWeakMap = <T extends WeakMap<any, unknown>>(obj?: T): obj is T =>
  (obj && obj.constructor.name === 'WeakMap') || false;
export default isWeakMap;

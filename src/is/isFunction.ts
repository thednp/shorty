/**
 * Checks if an object is a `Function`.
 *
 * @param fn the target object
 * @returns the query result
 */
const isFunction = <T extends (...arg0: any[]) => any>(fn?: T): fn is T =>
  typeof fn === 'function' || false;

export default isFunction;

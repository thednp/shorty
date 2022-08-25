/**
 * Checks if an object is a `Function`.
 *
 * @param fn the target object
 * @returns the query result
 */
const isFunction = (fn?: any): fn is ((...arg0: any[]) => any) => (fn && fn.constructor.name === 'Function') || false;

export default isFunction;

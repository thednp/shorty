/**
 * Checks if an object is a `Function`.
 *
 * @param {any} fn the target object
 * @returns {boolean} the query result
 */
const isFunction = (fn) => (fn && fn.constructor.name === 'Function') || false;
export default isFunction;

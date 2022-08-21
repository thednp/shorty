/**
 * Checks if an element is a `WeakMap`.
 *
 * @param obj the target object
 * @returns the query result
 */
const isWeakMap = (obj) => (obj && obj.constructor.name === 'WeakMap') || false;
export default isWeakMap;
//# sourceMappingURL=isWeakMap.js.map
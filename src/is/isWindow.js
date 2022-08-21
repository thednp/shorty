/**
 * Check if a target object is `Window`.
 * => equivalent to `object instanceof Window`
 *
 * @param obj the target object
 * @returns the query result
 */
const isWindow = (obj) => (obj && obj.constructor.name === 'Window') || false;
export default isWindow;
//# sourceMappingURL=isWindow.js.map
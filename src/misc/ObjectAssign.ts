/**
 * Shortcut for `Object.assign()` static method.
 * @param obj a target object
 * @param source a source object
 */
const ObjectAssign = (obj: Record<string, any>, source: Record<string, any>) =>
  Object.assign(obj, source);
export default ObjectAssign;

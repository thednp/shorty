/**
 * Shortcut for `Object.entries()` static method.
 * @param obj a target object
 * @returns the entries of an object in an array format
 */
const ObjectEntries = (obj: Record<string, any>): [string, any][] => Object.entries(obj);

export default ObjectEntries;

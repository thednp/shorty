/**
 * Shortcut for `Object.entries()` static method.
 * @param obj a target object
 * @returns the entries of an object in an array format [key, value][]
 */
const ObjectEntries = <O extends {}>(obj: O) => Object.entries(obj) as Array<[keyof O, O[keyof O]]>;

export default ObjectEntries;

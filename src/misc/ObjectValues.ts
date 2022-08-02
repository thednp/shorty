/**
 * Shortcut for `Object.values()` static method.
 * @param obj a target object
 * @returns an array with the object values
 */
const ObjectValues = <O extends {}>(obj: O): Array<[O[keyof O]]> => Object.values(obj);

export default ObjectValues;

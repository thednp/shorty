/**
 * A shortcut to `Object.hasOwn()` static method to work with both
 * `Node` as well as regular `Object` elements.
 *
 * @see https://fettblog.eu/typescript-hasownproperty/
 * @param obj the target object
 * @param prop the property to check
 * @returns the query result
 */
const hasOwn = <T extends object, K extends PropertyKey>(
  obj: T,
  prop: K,
): obj is T & Record<K, unknown> => Object.hasOwn(obj, prop) || prop in obj;

export default hasOwn;

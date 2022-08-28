/**
 * Checks if an element is a `Map`.
 *
 * @param obj the target object
 * @returns the query result
 */
const isMap = <T extends Map<any, any>>(obj?: T): obj is T =>
  (obj && obj.constructor.name === 'Map') || false;
export default isMap;

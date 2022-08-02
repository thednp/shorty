/**
 * Checks if an element is a `Map`.
 *
 * @param obj the target object
 * @returns the query result
 */
const isMap = (obj?: any): obj is Map<any, any> => (obj && obj.constructor.name === 'Map') || false;
export default isMap;

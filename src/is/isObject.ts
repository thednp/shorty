/**
 * Checks if a value is an `Object`.
 *
 * @param obj the target object
 * @returns the query result
 */
const isObject = (obj?: any): obj is object => typeof obj === "object" || false;

export default isObject;

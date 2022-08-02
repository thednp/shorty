/**
 * Shortie for `typeof SOMETHING === "string"`.
 *
 * @param str input value
 * @returns the query result
 */
const isString = (str?: any): str is string => typeof str === "string" || false;

export default isString;

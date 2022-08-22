/**
 * Checks if an object is a `NodeList`.
 * => equivalent to `object instanceof NodeList`
 *
 * @param obj the target object
 * @returns the query result
 */
const isNodeList = (obj?: any): obj is NodeList => (obj && obj.constructor.name === 'NodeList') || false;

export default isNodeList;
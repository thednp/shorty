/**
 * Checks if an object is a `NodeList`.
 * => equivalent to `object instanceof NodeList`
 *
 * @param {any} object the target object
 * @returns {boolean} the query result
 */
const isNodeList = (object) => (object && object.constructor.name === 'NodeList') || false;
export default isNodeList;

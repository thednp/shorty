/**
 * Checks if an object is a `NodeList`.
 *
 * @param {any} object the target object
 * @returns {boolean} the query result
 */
export default function isNodeList(object) {
  return object instanceof NodeList;
}

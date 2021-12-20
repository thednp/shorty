/**
 * Checks if an object is an `HTMLCollection`.
 *
 * @param {any} object the target object
 * @returns {boolean} the query result
 */
export default function isHTMLCollection(object) {
  return object instanceof HTMLCollection;
}

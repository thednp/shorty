/**
 * Checks if an object is an `HTMLCollection`.
 *
 * @param {any} object the target object
 * @returns {boolean} the query result
 */
const isHTMLCollection = (object) => object instanceof HTMLCollection;
export default isHTMLCollection;

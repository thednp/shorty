/**
 * Checks if an object is an `HTMLCollection`.
 *
 * @param {any} object the target object
 * @returns {boolean} the query result
 */
const isHTMLCollection = (object) => (object && object.constructor.name === 'HTMLCollection') || false;
export default isHTMLCollection;

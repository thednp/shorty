/**
 * Checks if an object is an `HTMLCollection`.
 *
 * @param obj the target object
 * @returns the query result
 */
const isHTMLCollection = (obj) => (obj && obj.constructor.name === 'HTMLCollection') || false;
export default isHTMLCollection;
//# sourceMappingURL=isHTMLCollection.js.map
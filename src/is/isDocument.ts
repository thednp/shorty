/**
 * Checks if an object is a `Document`.
 *
 * @see https://dom.spec.whatwg.org/#node
 *
 * @param obj the target object
 * @returns the query result
 */
const isDocument = (obj?: Node | Document): obj is Document => (obj && obj.nodeType === 9) || false;

export default isDocument;

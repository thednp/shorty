/**
 * Checks if an object is a `Node`.
 *
 * @param node the target object
 * @returns the query result
 */
const isNode = (node) => (node && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some((x) => node.nodeType === x)) || false;
export default isNode;
//# sourceMappingURL=isNode.js.map
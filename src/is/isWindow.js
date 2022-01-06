/**
 * Check if a target node is `window`.
 *
 * @param {any} node the target node
 * @returns {boolean} the query result
 */
export default function isWindow(node) {
  return node instanceof Window;
}

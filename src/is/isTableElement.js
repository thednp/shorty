/**
 * Check if a target element is a `<table>`, `<td>` or `<th>`.
 * This specific check is important for determining
 * the `offsetParent` of a given element.
 *
 * @param {any} element the target element
 * @returns {boolean} the query result
 */
const isTableElement = (element) => (element && ['TABLE', 'TD', 'TH'].includes(element.tagName))
  || false;
export default isTableElement;

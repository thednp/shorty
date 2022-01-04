/**
 * Check if a target element is a `<table>`, `<td>` or `<th>`.
 * @param {any} element the target element
 * @returns {boolean} the query result
 */
const isTableElement = (element) => ['TABLE', 'TD', 'TH'].includes(element.tagName);
export default isTableElement;

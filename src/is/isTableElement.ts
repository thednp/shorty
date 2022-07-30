/**
 * Check if a target element is a `<table>`, `<td>` or `<th>`.
 * This specific check is important for determining
 * the `offsetParent` of a given element.
 *
 * @param element the target element
 * @returns the query result
 */
const isTableElement = (element?: any): element is HTMLTableElement | HTMLTableCellElement =>
  (element && ["TABLE", "TD", "TH"].includes(element.tagName)) || false;

export default isTableElement;

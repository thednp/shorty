/**
 * Check if a target element is an `<img>`.
 * @param element the target element
 * @returns the query result
 */
const isHTMLImageElement = (element?: any): element is HTMLImageElement =>
  (element && element.tagName === "IMG") || false;

export default isHTMLImageElement;

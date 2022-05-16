/**
 * Check if a target element is an `<img>`.
 * @param {any} element the target element
 * @returns {boolean} the query result
 */
const isHTMLImageElement = (element) => (element && element.tagName === 'IMG') || false;

export default isHTMLImageElement;

/**
 * Checks if an element is an `<svg>` (or any type of SVG element),
 * `<img>` or `<video>`.
 *
 * *Tooltip* / *Popover* works different with media elements.
 * @param {any} element the target element
 * @returns {boolean} the query result
 */

const isMedia = (element) => (
  element
  && element.nodeType === 1
  && ['SVG', 'Image', 'Video'].some((s) => element.constructor.name.includes(s))) || false;
export default isMedia;

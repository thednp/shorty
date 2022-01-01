/**
 * Checks if an element is an `<svg>`, `<img>` or `<video>`.
 * *Tooltip* / *Popover* works different with media elements.
 * @param {any} element the target element
 * @returns {boolean} the query result
 */
const isMedia = (element) => element
  && [SVGElement, HTMLImageElement, HTMLVideoElement]
    .some((mediaType) => element instanceof mediaType);
export default isMedia;

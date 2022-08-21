/**
 * Checks if an element is an `<svg>` (or any type of SVG element),
 * `<img>`, `<video>` or `<canvas>`.
 *
 * *Tooltip* / *Popover* works different with media elements.
 * @param element the target element
 * @returns the query result
 */

const isMedia = (element?: any): element is SVGElement | HTMLImageElement | HTMLVideoElement | HTMLCanvasElement =>
  (element &&
    element.nodeType === 1 &&
    ['SVG', 'Image', 'Video', 'Canvas'].some((s) => element.constructor.name.includes(s))) ||
  false;

export default isMedia;

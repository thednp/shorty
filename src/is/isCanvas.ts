/**
 * Checks if an element is an `HTMLCanvasElement` or `<canvas>`.
 *
 * @param element the target element
 * @returns the query result
 */

const isCanvas = (element?: Node): element is HTMLCanvasElement =>
  (element && element.nodeName === 'CANVAS') || false;

export default isCanvas;

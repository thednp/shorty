/**
 * Checks if an element is an `HTMLCanvasElement` or `<canvas>`.
 *
 * @param element the target element
 * @returns the query result
 */
const isCanvas = (element) => (element && element.constructor.name === 'HTMLCanvasElement') || false;
export default isCanvas;
//# sourceMappingURL=isCanvas.js.map
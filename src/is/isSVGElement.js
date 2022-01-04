/**
 * Check if an element is an `<svg>` or any other SVG element.
 * @param {any} element the target element
 * @returns {boolean} the query result
 */
const isSVGElement = (element) => element instanceof SVGElement;

export default isSVGElement;

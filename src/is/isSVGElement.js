import getWindow from '../get/getWindow';

/**
 * Check if an element is an `<svg>` or any other SVG element.
 * @param {any} element the target element
 * @returns {boolean} the query result
 */
const isSVGElement = (element) => (element && element instanceof getWindow(element).SVGElement)
  || false;

export default isSVGElement;

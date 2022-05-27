/**
 * Utility to force re-paint of an `HTMLElement` target.
 *
 * @param {HTMLElement} element is the target
 * @return {number} the `Element.offsetHeight` value
 */
const reflow = (element) => element.offsetHeight;
export default reflow;

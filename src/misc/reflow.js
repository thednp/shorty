/**
 * Utility to force re-paint of an `HTMLElement` target.
 *
 * @param {HTMLElement | Element} element is the target
 * @return {number} the `Element.offsetHeight` value
 */
// @ts-ignore
const reflow = (element) => element.offsetHeight;
export default reflow;

/**
 * Utility to force re-paint of an Element
 *
 * @param {HTMLElement} element is the target
 * @return {number} the Element.offsetHeight value
 */
export default function reflow(element) {
  return element.offsetHeight;
}

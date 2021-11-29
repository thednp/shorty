/**
 * Utility to force re-paint of an Element
 *
 * @param {Element | HTMLElement} element is the target
 * @return {number} the Element.offsetHeight value
 */
export default function reflow(element) {
  // @ts-ignore
  return element.offsetHeight;
}

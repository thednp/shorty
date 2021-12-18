/**
 * Utility to force re-paint of an `Element` target.
 *
 * @param {Element | HTMLElement} element is the target
 * @return {number} the `Element.offsetHeight` value
 */
export default function reflow(element) {
  // @ts-ignore -- our `Element` is always an `HTMLElement`
  return element.offsetHeight;
}

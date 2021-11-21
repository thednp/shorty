/**
 * Utility to check if target is typeof Element
 * or find one that matches a selector.
 *
 * @param {string | Element} selector the input selector or target element
 * @param {?Element} parent optional Element to look into
 * @return {null | Element} the Element or result of the querySelector
 */
export default function queryElement(selector, parent) {
  const lookUp = parent && parent instanceof Element ? parent : document;
  return selector instanceof Element ? selector : lookUp.querySelector(selector);
}

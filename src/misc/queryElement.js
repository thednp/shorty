/**
 * Utility to check if target is typeof Element
 * or find one that matches a selector.
 *
 * @param {HTMLElement | string} selector the input selector or target element
 * @param {HTMLElement | null} parent optional Element to look into
 * @return {HTMLElement | null} the Element or result of the querySelector
 */
export default function queryElement(selector, parent) {
  const lookUp = parent && parent instanceof HTMLElement ? parent : document;
  return selector instanceof HTMLElement ? selector : lookUp.querySelector(selector);
}

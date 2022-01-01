import isHTMLElement from '../misc/isHTMLElement';

/**
 * Utility to check if target is typeof `HTMLElement`
 * or find one that matches a selector.
 *
 * @param {HTMLElement | string} selector the input selector or target element
 * @param {HTMLElement=} parent optional `HTMLElement` to look into
 * @return {HTMLElement?} the `HTMLElement` or `querySelector` result
 */
export default function querySelector(selector, parent) {
  const lookUp = parent && isHTMLElement(parent) ? parent : document;
  return typeof selector === 'object' ? selector : lookUp.querySelector(selector);
}

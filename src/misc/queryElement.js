import querySelector from './querySelector';

/**
 * Utility to check if target is typeof `HTMLElement`
 * or find one that matches a selector.
 *
 * @deprecated
 *
 * @param {HTMLElement | string} selector the input selector or target element
 * @param {(ParentNode | HTMLElement)=} parent optional `HTMLElement` to look into
 * @return {HTMLElement?} the Element or `querySelector` result
 */
export default function queryElement(selector, parent) {
  return querySelector(selector, parent);
}

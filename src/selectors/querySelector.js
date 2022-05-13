import getDocument from '../get/getDocument';

/**
 * Utility to check if target is typeof `HTMLElement`, `Element`, `Node`
 * or find one that matches a selector.
 *
 * @param {Node | HTMLElement | Element | string} selector the input selector or target element
 * @param {(Node | HTMLElement | Element | Document)=} parent optional node to look into
 * @return {(HTMLElement | Element)?} the `HTMLElement` or `querySelector` result
 */
export default function querySelector(selector, parent) {
  if (typeof selector === 'string') {
    const lookUp = typeof parent !== 'object' ? getDocument() : parent;
    return lookUp.querySelector(selector);
  }
  return selector;
}

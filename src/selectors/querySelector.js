import getDocument from '../get/getDocument';
import isNode from '../is/isNode';

/**
 * Utility to check if target is typeof `HTMLElement`, `Element`, `Node`
 * or find one that matches a selector.
 *
 * @param {Node | string} selector the input selector or target element
 * @param {ParentNode=} parent optional node to look into
 * @return {HTMLElement?} the `HTMLElement` or `querySelector` result
 */
export default function querySelector(selector, parent) {
  if (isNode(selector)) {
    return selector;
  }
  const lookUp = isNode(parent) ? parent : getDocument();

  return lookUp.querySelector(selector);
}

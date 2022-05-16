import getDocument from '../get/getDocument';
import isNode from '../is/isNode';

/**
 * Shortcut for `HTMLElement.getElementsByClassName` method. Some `Node` elements
 * like `ShadowRoot` do not support `getElementsByClassName`.
 *
 * @param {string} selector the class name
 * @param {ParentNode=} parent optional Element to look into
 * @return {HTMLCollectionOf<HTMLElement>} the 'HTMLCollection'
 */
export default function getElementsByClassName(selector, parent) {
  const lookUp = isNode(parent) ? parent : getDocument();
  return lookUp.getElementsByClassName(selector);
}

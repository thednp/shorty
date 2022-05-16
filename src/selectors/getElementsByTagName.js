import getDocument from '../get/getDocument';
import isNode from '../is/isNode';

/**
 * Shortcut for `HTMLElement.getElementsByTagName` method. Some `Node` elements
 * like `ShadowRoot` do not support `getElementsByTagName`.
 *
 * @param {string} selector the tag name
 * @param {ParentNode=} parent optional Element to look into
 * @return {HTMLCollectionOf<HTMLElement>} the 'HTMLCollection'
 */
export default function getElementsByTagName(selector, parent) {
  const lookUp = isNode(parent) ? parent : getDocument();
  return lookUp.getElementsByTagName(selector);
}

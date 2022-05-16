import getDocument from '../get/getDocument';
import isNode from '../is/isNode';

/**
 * A shortcut for `(document|Element).querySelectorAll`.
 *
 * @param {string} selector the input selector
 * @param {ParentNode=} parent optional node to look into
 * @return {NodeListOf<HTMLElement>} the query result
 */
export default function querySelectorAll(selector, parent) {
  const lookUp = isNode(parent) ? parent : getDocument();
  return lookUp.querySelectorAll(selector);
}

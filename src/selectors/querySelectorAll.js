import getDocument from '../get/getDocument';
import parentNodes from './parentNodes';

/**
 * A shortcut for `(document|Element).querySelectorAll`.
 *
 * @param {string} selector the input selector
 * @param {(HTMLElement | Element | Document | Node)=} parent optional node to look into
 * @return {NodeListOf<HTMLElement | Element>} the query result
 */
export default function querySelectorAll(selector, parent) {
  const lookUp = parentNodes.some((e) => parent instanceof e)
    ? parent : getDocument();
  return lookUp.querySelectorAll(selector);
}

import isHTMLElement from './isHTMLElement';

/**
 * A shortcut for `(document|Element).querySelectorAll`.
 *
 * @param {string} selector the input selector
 * @param {(HTMLElement | ParentNode)=} parent optional Element to look into
 * @return {NodeListOf<HTMLElement>} the query result
 */
export default function querySelectorAll(selector, parent) {
  const lookUp = parent && isHTMLElement(parent) ? parent : document;
  return lookUp.querySelectorAll(selector);
}

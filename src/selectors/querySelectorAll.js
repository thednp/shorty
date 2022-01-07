import getDocument from '../get/getDocument';

/**
 * A shortcut for `(document|Element).querySelectorAll`.
 *
 * @param {string} selector the input selector
 * @param {(Document | HTMLElement | Element)=} parent optional node to look into
 * @return {NodeListOf<Element>} the query result
 */
export default function querySelectorAll(selector, parent) {
  const lookUp = [HTMLElement, Element, Document]
    .some((x) => parent instanceof x) ? parent : getDocument();
  // @ts-ignore
  return lookUp.querySelectorAll(selector);
}

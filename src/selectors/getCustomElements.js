import getDocument from '../get/getDocument';

/**
 * Returns an `Array` of `Node` elements that are registered as
 * `CustomElement`.
 * @see https://stackoverflow.com/questions/27334365/how-to-get-list-of-registered-custom-elements
 *
 * @param {(HTMLElement | Document)=} parent parent to look into
 * @returns {Element[]} the query result
 */
export default function getCustomElements(parent) {
  const lookUp = [HTMLElement, Element, Document]
    .some((x) => parent instanceof x) ? parent : getDocument();
  // @ts-ignore
  return [...lookUp.querySelectorAll('*')]
    .filter((x) => customElements.get(x.tagName.toLowerCase()));
}

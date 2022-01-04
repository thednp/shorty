import isHTMLElement from '../is/isHTMLElement';

/**
 * Returns an `Array` of `Node` elements that are registered as
 * `CustomElement`.
 * @see https://stackoverflow.com/questions/27334365/how-to-get-list-of-registered-custom-elements
 *
 *
 * @param {HTMLElement=} parent parent to look into
 * @returns {Node[]} the query result
 */
export default function getCustomElements(parent) {
  const lookUp = parent && isHTMLElement(parent) ? parent : document;
  return [...lookUp.querySelectorAll('*')]
    .filter((x) => customElements.get(x.nodeName.toLowerCase()));
}

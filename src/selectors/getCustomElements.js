import getDocument from '../get/getDocument';
import isCustomElement from '../is/isCustomElement';
import parentNodes from './parentNodes';

/**
 * Returns an `Array` of `Node` elements that are registered as
 * `CustomElement`.
 * @see https://stackoverflow.com/questions/27334365/how-to-get-list-of-registered-custom-elements
 *
 * @param {(HTMLElement | Element | Node | Document)=} parent parent to look into
 * @returns {(HTMLElement | Element)[]} the query result
 */
export default function getCustomElements(parent) {
  const lookUp = parent && parentNodes.some((x) => parent instanceof x)
    ? parent : getDocument();
  // @ts-ignore -- look inside `shadowRoot` node too
  return [...lookUp.querySelectorAll('*')].filter(isCustomElement);
}

import getDocument from '../get/getDocument';
import parentNodes from './parentNodes';

/**
 * Shortcut for `HTMLElement.getElementsByTagName` method. Some `Node` elements
 * like `ShadowRoot` do not support `getElementsByTagName`.
 *
 * @param {string} selector the tag name
 * @param {(SHORTER.ElementNodes | Document)=} parent optional Element to look into
 * @return {HTMLCollectionOf<SHORTER.ElementNodes>} the 'HTMLCollection'
 */
export default function getElementsByTagName(selector, parent) {
  const lookUp = parent && parentNodes
    .some((x) => parent instanceof x) ? parent : getDocument();
  return lookUp.getElementsByTagName(selector);
}

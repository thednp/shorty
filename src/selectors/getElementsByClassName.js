import getDocument from '../get/getDocument';
import parentNodes from './parentNodes';

/**
 * Shortcut for `HTMLElement.getElementsByClassName` method. Some `Node` elements
 * like `ShadowRoot` do not support `getElementsByClassName`.
 *
 * @param {string} selector the class name
 * @param {(SHORTER.ElementNodes | Document)=} parent optional Element to look into
 * @return {HTMLCollectionOf<SHORTER.ElementNodes>} the 'HTMLCollection'
 */
export default function getElementsByClassName(selector, parent) {
  const lookUp = parent && parentNodes.some((x) => parent instanceof x)
    ? parent : getDocument();
  return lookUp.getElementsByClassName(selector);
}

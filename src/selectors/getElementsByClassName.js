import getDocument from '../get/getDocument';

/**
 * Shortcut for `HTMLElement.getElementsByClassName` method. Some `Node` elements
 * like `ShadowRoot` do not support `getElementsByClassName`.
 *
 * @param {string} selector the class name
 * @param {(HTMLElement | Element | Document)=} parent optional Element to look into
 * @return {HTMLCollectionOf<HTMLElement | Element>} the 'HTMLCollection'
 */
export default function getElementsByClassName(selector, parent) {
  const method = 'getElementsByClassName';
  const lookUp = parent && parent[method] ? parent : getDocument();
  return lookUp[method](selector);
}

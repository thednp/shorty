import isHTMLElement from './isHTMLElement';

/**
 * Shortcut for `HTMLElement.getElementsByClassName` method.
 *
 * @param {string} selector the class name
 * @param {(HTMLElement)=} parent optional Element to look into
 * @return {HTMLCollectionOf<HTMLElement | Element>} the 'HTMLCollection'
 */
export default function getElementsByClassName(selector, parent) {
  const lookUp = parent && isHTMLElement(parent) ? parent : document;
  return lookUp.getElementsByClassName(selector);
}

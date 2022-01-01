import isHTMLElement from '../misc/isHTMLElement';

/**
 * Shortcut for `HTMLElement.getElementsByClassName` method.
 *
 * @param {string} selector the class name
 * @param {HTMLElement=} parent optional Element to look into
 * @return {HTMLCollectionOf<HTMLElement>} the 'HTMLCollection'
 */
export default function getElementsByClassName(selector, parent) {
  const lookUp = parent && isHTMLElement(parent) ? parent : document;
  // @ts-ignore
  return lookUp.getElementsByClassName(selector);
}

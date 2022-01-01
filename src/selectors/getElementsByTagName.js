import isHTMLElement from '../misc/isHTMLElement';

/**
 * Shortcut for `HTMLElement.getElementsByTagName` method.
 *
 * @param {string} selector the tag name
 * @param {HTMLElement=} parent optional Element to look into
 * @return {HTMLCollectionOf<HTMLElement>} the 'HTMLCollection'
 */
export default function getElementsByTagName(selector, parent) {
  const lookUp = parent && isHTMLElement(parent) ? parent : document;
  // @ts-ignore
  return lookUp.getElementsByTagName(selector);
}

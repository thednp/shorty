import getDocument from '../get/getDocument';

/**
 * Shortcut for `HTMLElement.getElementsByTagName` method.
 *
 * @param {string} selector the tag name
 * @param {(HTMLElement | Element | Document)=} parent optional Element to look into
 * @return {HTMLCollection} the 'HTMLCollection'
 */
export default function getElementsByTagName(selector, parent) {
  const lookUp = [HTMLElement, Element, Document]
    .some((x) => parent instanceof x) ? parent : getDocument();
  // @ts-ignore
  return lookUp.getElementsByTagName(selector);
}

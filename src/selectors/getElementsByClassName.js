import getDocument from '../get/getDocument';

/**
 * Shortcut for `HTMLElement.getElementsByClassName` method.
 *
 * @param {string} selector the class name
 * @param {(HTMLElement | Element | Document)=} parent optional Element to look into
 * @return {HTMLCollection} the 'HTMLCollection'
 */
export default function getElementsByClassName(selector, parent) {
  const lookUp = [HTMLElement, Element, Document]
    .some((x) => parent instanceof x) ? parent : getDocument();
  // @ts-ignore
  return lookUp.getElementsByClassName(selector);
}

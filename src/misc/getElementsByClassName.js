import isElement from './isElement';

/**
 * Shortcut for `Element.getElementsByClassName` method.
 *
 * @param {string} selector the class name
 * @param {Element=} parent optional Element to look into
 * @return {HTMLCollection} the 'HTMLCollection'
 */
export default function getElementsByClassName(selector, parent) {
  const lookUp = parent && isElement(parent) ? parent : document;
  return lookUp.getElementsByClassName(selector);
}

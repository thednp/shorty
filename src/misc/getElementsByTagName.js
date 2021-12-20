import isElement from './isElement';

/**
 * Shortcut for `Element.getElementsByTagName` method.
 *
 * @param {string} selector the tag name
 * @param {Element=} parent optional Element to look into
 * @return {HTMLCollection} the 'HTMLCollection'
 */
export default function getElementsByTagName(selector, parent) {
  const lookUp = parent && isElement(parent) ? parent : document;
  return lookUp.getElementsByTagName(selector);
}

import isElement from './isElement';

/**
 * A shortcut for `(document|Element).querySelectorAll`.
 *
 * @param {string} selector the input selector
 * @param {ParentNode=} parent optional Element to look into
 * @return {NodeList} the query result
 */
export default function querySelectorAll(selector, parent) {
  const lookUp = parent && isElement(parent) ? parent : document;
  return lookUp.querySelectorAll(selector);
}

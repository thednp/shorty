import isElement from './isElement';

/**
 * Utility to check if target is typeof `Element`
 * or find one that matches a selector.
 *
 * @param {Element | string} selector the input selector or target element
 * @param {Element=} parent optional Element to look into
 * @return {Element?} the Element or `querySelector` result
 */
export default function querySelector(selector, parent) {
  const lookUp = parent && isElement(parent) ? parent : document;
  // @ts-ignore -- `isElement` is just as good
  return isElement(selector) ? selector : lookUp.querySelector(selector);
}

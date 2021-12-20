import querySelector from './querySelector';

/**
 * Utility to check if target is typeof `Element`
 * or find one that matches a selector.
 *
 * @deprecated
 *
 * @param {Element | string} selector the input selector or target element
 * @param {Element=} parent optional Element to look into
 * @return {Element?} the Element or `querySelector` result
 */
export default function queryElement(selector, parent) {
  return querySelector(selector, parent);
}

import getDocument from '../get/getDocument';

/**
 * Utility to check if target is typeof `HTMLElement`, `Element`, `Node`
 * or find one that matches a selector.
 *
 * @param {HTMLElement | Element | string} selector the input selector or target element
 * @param {(HTMLElement | Element | Document)=} parent optional node to look into
 * @return {(HTMLElement | Element)?} the `HTMLElement` or `querySelector` result
 */
export default function querySelector(selector, parent) {
  const method = 'querySelector';
  const lookUp = parent && parent[method] ? parent : getDocument();
  return selector[method] ? selector : lookUp[method](selector);
}

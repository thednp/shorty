import getDocument from '../get/getDocument';
import elementNodes from './elementNodes';
import parentNodes from './parentNodes';

/**
 * Utility to check if target is typeof `HTMLElement`, `Element`, `Node`
 * or find one that matches a selector.
 *
 * @param {Node | HTMLElement | Element | string} selector the input selector or target element
 * @param {(Node | HTMLElement | Element | Document)=} parent optional node to look into
 * @return {(HTMLElement | Element)?} the `HTMLElement` or `querySelector` result
 */
export default function querySelector(selector, parent) {
  const method = 'querySelector';
  if (elementNodes.some((e) => selector instanceof e)) return selector;

  if (selector) {
    const lookUp = parentNodes.some((e) => parent instanceof e)
      ? parent : getDocument();
    return lookUp[method](selector);
  }
  return null;
}

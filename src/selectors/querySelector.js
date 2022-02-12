import getDocument from '../get/getDocument';
import parentNodes from './parentNodes';
import elementNodes from './elementNodes';

/**
 * Utility to check if target is typeof `HTMLElement`, `Element`, `Node`
 * or find one that matches a selector.
 *
 * @param {HTMLElement | Element | string} selector the input selector or target element
 * @param {(HTMLElement | Element | Document)=} parent optional node to look into
 * @return {(HTMLElement | Element)?} the `HTMLElement` or `querySelector` result
 */
export default function querySelector(selector, parent) {
  const lookUp = parentNodes.some((x) => parent instanceof x)
    ? parent : getDocument();

  // @ts-ignore
  return elementNodes.some((x) => selector instanceof x)
    // @ts-ignore
    ? selector : lookUp.querySelector(selector);
}

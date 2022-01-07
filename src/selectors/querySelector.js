import getDocument from '../get/getDocument';
import isHTMLElement from '../is/isHTMLElement';

/**
 * Utility to check if target is typeof `HTMLElement`, `Element`, `Node`
 * or find one that matches a selector.
 *
 * @param {HTMLElement | string} selector the input selector or target element
 * @param {(Document | Element | HTMLElement)=} parent optional node to look into
 * @return {HTMLElement?} the `HTMLElement` or `querySelector` result
 */
export default function querySelector(selector, parent) {
  const nodeTypes = [Document, HTMLElement, Element];
  const lookUp = nodeTypes.some((x) => parent instanceof x)
    ? parent : getDocument();
  // @ts-ignore
  return isHTMLElement(selector) ? selector : lookUp.querySelector(selector);
}

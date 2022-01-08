import getDocument from '../get/getDocument';
import parentNodes from './parentNodes';
import elementNodes from './elementNodes';

/**
 * Utility to check if target is typeof `HTMLElement`, `Element`, `Node`
 * or find one that matches a selector.
 *
 * @param {SHORTER.ElementNodes | string} selector the input selector or target element
 * @param {SHORTER.ParentNodes=} parent optional node to look into
 * @return {SHORTER.ElementNodes?} the `HTMLElement` or `querySelector` result
 */
export default function querySelector(selector, parent) {
  const selectorIsString = typeof selector === 'string';
  const lookUp = parent && parentNodes.some((x) => parent instanceof x)
    ? parent : getDocument();

  if (!selectorIsString && [...elementNodes].some((x) => selector instanceof x)) {
    return selector;
  }
  // @ts-ignore -- `ShadowRoot` is also a node
  return selectorIsString ? lookUp.querySelector(selector) : null;
}

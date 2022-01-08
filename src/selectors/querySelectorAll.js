import getDocument from '../get/getDocument';
import parentNodes from './parentNodes';

/**
 * A shortcut for `(document|Element).querySelectorAll`.
 *
 * @param {string} selector the input selector
 * @param {(SHORTER.ParentNodes)=} parent optional node to look into
 * @return {NodeListOf<SHORTER.ElementNodes>} the query result
 */
export default function querySelectorAll(selector, parent) {
  const lookUp = parent && parentNodes
    .some((x) => parent instanceof x) ? parent : getDocument();
  // @ts-ignore -- `ShadowRoot` is also a node
  return lookUp.querySelectorAll(selector);
}

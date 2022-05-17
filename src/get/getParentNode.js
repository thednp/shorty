import getDocumentElement from './getDocumentElement';
import isShadowRoot from '../is/isShadowRoot';

/**
 * Returns the `parentNode` also going through `ShadowRoot`.
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param {Node} node the target node
 * @returns {Node} the apropriate parent node
 */
export default function getParentNode(node) {
  if (node.nodeName === 'HTML') {
    return node;
  }

  // this is a quicker (but less type safe) way to save quite some bytes from the bundle
  return (
    node.assignedSlot // step into the shadow DOM of the parent of a slotted node
    || node.parentNode // DOM Element detected
    || (isShadowRoot(node) && node.host) // ShadowRoot detected
    || getDocumentElement(node) // fallback
  );
}

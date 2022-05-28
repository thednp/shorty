import isDocument from '../is/isDocument';
import isNode from '../is/isNode';

/**
 * Returns the `Window` object of a target node.
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param {(Node | Window)=} node target node
 * @returns {Window} the `Window` object
 */
export default function getWindow(node) {
  // node is undefined | NULL
  if (!node) return window;
  // node instanceof Document
  if (isDocument(node)) return node.defaultView;
  // node instanceof Node
  if (isNode(node)) return node.ownerDocument.defaultView;
  // node is instanceof Window
  return node;
}

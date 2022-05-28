import isNode from '../is/isNode';
import isWindow from '../is/isWindow';
import isDocument from '../is/isDocument';

/**
 * Returns the `document` or the `#document` element.
 * @see https://github.com/floating-ui/floating-ui
 * @param {(Node | Window)=} node
 * @returns {Document}
 */
export default function getDocument(node) {
  // node instanceof Document
  if (isDocument(node)) return node;
  // node instanceof Node
  if (isNode(node)) return node.ownerDocument;
  // node instanceof Window
  if (isWindow(node)) return node.document;
  // node is undefined | NULL
  return window.document;
}

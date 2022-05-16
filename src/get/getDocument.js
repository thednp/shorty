import isDocument from '../is/isDocument';
import isNode from '../is/isNode';
import isWindow from '../is/isWindow';

/**
 * Returns the `document` or the `#document` element.
 * @see https://github.com/floating-ui/floating-ui
 * @param {(ParentNode | Window)=} node
 * @returns {Document}
 */
export default function getDocument(node) {
  if (isDocument(node)) return node;
  if (isNode(node)) return node.ownerDocument;
  if (isWindow(node)) return node.document;
  return window.document;
}

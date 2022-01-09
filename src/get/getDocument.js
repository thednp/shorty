import isWindow from '../is/isWindow';
import isNode from '../is/isNode';

/**
 * Returns the `document` or the `#document` element.
 * @see https://github.com/floating-ui/floating-ui
 * @param {(Node | HTMLElement | Element | Window)=} node
 * @returns {Document}
 */
export default function getDocument(node) {
  // @ts-ignore -- `isNode` checks that
  if (isNode(node)) return node.ownerDocument;
  // @ts-ignore -- `isWindow` checks that too
  if (isWindow(node)) return node.document;
  return window.document;
}

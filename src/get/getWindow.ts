import isDocument from "../is/isDocument";
import isNode from "../is/isNode";

/**
 * Returns the `Window` object of a target node.
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param node target node
 * @returns the `Window` object
 */
const getWindow = (node?: any): Window => {
  // node is undefined | NULL
  if (!node) return window;
  // node instanceof Document
  if (isDocument(node)) return node.defaultView;
  // node instanceof Node
  if (isNode(node)) return node.ownerDocument.defaultView;
  // node is instanceof Window
  return node;
};

export default getWindow;

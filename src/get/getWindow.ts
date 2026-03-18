import isDocument from "../is/isDocument.ts";
import isNode from "../is/isNode.ts";

/**
 * Returns the `Window` object of a target node.
 *
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param node target node
 * @returns the `Window` object
 */
const getWindow = (node?: Node): Window => {
  // node is undefined | NULL
  if (!node) return window;
  // node instanceof Document
  if (isDocument(node)) return node.defaultView as Window;
  // node instanceof Node
  if (isNode(node)) return node?.ownerDocument?.defaultView as Window;
  // node is instanceof Window
  return node;
};

export default getWindow;

/**
 * Returns the `Window` object of a target node.
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param {(Node | HTMLElement | Element | Window)=} node target node
 * @returns {globalThis}
 */
export default function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (!(node instanceof Window)) {
    const { ownerDocument } = node;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  // @ts-ignore
  return node;
}

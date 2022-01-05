import isWindow from '../is/isWindow';

/**
 * Returns the `Window` object of a target node.
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param {(Node | Element | Window)=} node target node
 * @returns {Window} the `Window` object
 */
export default function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (!isWindow(node)) {
    // @ts-ignore
    const { ownerDocument } = node;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  // @ts-ignore
  return node;
}

import isWindow from '../is/isWindow';

/**
 * Returns the `Window` object.
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param {(Node | Element)=} node target node
 * @returns {Window} the `Window` object
 */
export default function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (!isWindow(node)) {
    const { ownerDocument } = node;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  // @ts-ignore
  return node;
}

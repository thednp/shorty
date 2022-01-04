/**
 * Returns the `document.documentElement` or the `<html>` element.
 * @see https://github.com/floating-ui/floating-ui
 * @param {Node | Window} node
 * @returns {HTMLElement}
 */
export default function getDocumentElement(node) {
  const doc = (node instanceof Node ? node.ownerDocument : node.document) || window.document;
  return doc.documentElement;
}

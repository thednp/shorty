import getDocument from './getDocument';
/**
 * Returns the `document.head` or the `<head>` element.
 *
 * @param {(Node | HTMLElement | Element)=} node
 * @returns {HTMLElement}
 */
export default function getDocumentHead(node) {
  return getDocument(node).head;
}
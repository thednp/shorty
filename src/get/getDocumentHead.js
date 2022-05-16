import getDocument from './getDocument';
/**
 * Returns the `document.head` or the `<head>` element.
 *
 * @param {(ParentNode | Window)=} node
 * @returns {HTMLHeadElement}
 */
export default function getDocumentHead(node) {
  return getDocument(node).head;
}

import getDocument from './getDocument';
/**
 * Returns the `document.body` or the `<body>` element.
 *
 * @param {(Node | SHORTER.ElementNodes)=} node
 * @returns {HTMLElement | HTMLBodyElement}
 */
export default function getDocumentBody(node) {
  return getDocument(node).body;
}

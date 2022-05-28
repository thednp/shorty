import getDocument from './getDocument';
/**
 * Returns the `document.body` or the `<body>` element.
 *
 * @param {(Node | Window)=} node
 * @returns {HTMLBodyElement}
 */
export default function getDocumentBody(node) {
  return getDocument(node).body;
}

import getDocument from './getDocument';
/**
 * Returns the `document.body` or the `<body>` element.
 *
 * @param {(Node | HTMLElement | Element)=} node
 * @returns {HTMLElement}
 */
export default function getDocumentBody(node) {
  return getDocument(node).body;
}

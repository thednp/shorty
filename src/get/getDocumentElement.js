import getDocument from './getDocument';

/**
 * Returns the `document.documentElement` or the `<html>` element.
 *
 * @param {(Node | HTMLElement | Element)=} node
 * @returns {HTMLElement}
 */
export default function getDocumentElement(node) {
  return getDocument(node).documentElement;
}

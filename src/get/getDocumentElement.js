import getDocument from './getDocument';

/**
 * Returns the `document.documentElement` or the `<html>` element.
 *
 * @param {(Node | SHORTER.ElementNodes)=} node
 * @returns {HTMLElement | HTMLHtmlElement}
 */
export default function getDocumentElement(node) {
  return getDocument(node).documentElement;
}

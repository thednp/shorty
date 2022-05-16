import getDocument from './getDocument';

/**
 * Returns the `document.documentElement` or the `<html>` element.
 *
 * @param {(ParentNode | Window)=} node
 * @returns {HTMLHtmlElement}
 */
export default function getDocumentElement(node) {
  return getDocument(node).documentElement;
}

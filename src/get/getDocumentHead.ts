import getDocument from "./getDocument";
/**
 * Returns the `document.head` or the `<head>` element.
 *
 * @param node reference node
 * @returns the `<head>` of the node's parent document
 */
const getDocumentHead = (node?: Node): HTMLElement => {
  return getDocument(node).head;
};

export default getDocumentHead;

import getDocument from "./getDocument";

/**
 * Returns the `document.body` or the `<body>` element.
 *
 * @param node reference node
 * @returns the parent `<body>` of the specified node
 */
const getDocumentBody = (node?: any): HTMLElement => {
  return getDocument(node).body;
};

export default getDocumentBody;

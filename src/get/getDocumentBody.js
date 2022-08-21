import getDocument from './getDocument';
/**
 * Returns the `document.body` or the `<body>` element.
 *
 * @param node the reference node
 * @returns the parent `<body>` of the specified node
 */
const getDocumentBody = (node) => {
    return getDocument(node).body;
};
export default getDocumentBody;
//# sourceMappingURL=getDocumentBody.js.map
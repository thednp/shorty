import isNode from "../is/isNode";
import isWindow from "../is/isWindow";
import isDocument from "../is/isDocument";
const getDocument = (node) => {
    if (isDocument(node))
        return node;
    if (isNode(node))
        return node.ownerDocument;
    if (isWindow(node))
        return node.document;
    return window.document;
};
export default getDocument;
//# sourceMappingURL=getDocument.js.map
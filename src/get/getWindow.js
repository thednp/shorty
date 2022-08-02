import isDocument from "../is/isDocument";
import isNode from "../is/isNode";
const getWindow = (node) => {
    if (!node)
        return window;
    if (isDocument(node))
        return node.defaultView;
    if (isNode(node))
        return node.ownerDocument.defaultView;
    return node;
};
export default getWindow;
//# sourceMappingURL=getWindow.js.map
import getDocumentElement from "./getDocumentElement";
import isShadowRoot from "../is/isShadowRoot";
const getParentNode = (node) => {
    if (node.nodeName === "HTML") {
        return node;
    }
    return (node.assignedSlot ||
        node.parentNode ||
        (isShadowRoot(node) && node.host) ||
        getDocumentElement(node));
};
export default getParentNode;
//# sourceMappingURL=getParentNode.js.map
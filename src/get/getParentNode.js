import getDocumentElement from './getDocumentElement';
import isShadowRoot from '../is/isShadowRoot';
import isHTMLElement from '../is/isHTMLElement';
import isNode from '../is/isNode';
const getParentNode = (node) => {
    if (node.nodeName === 'HTML') {
        return node;
    }
    return ((isHTMLElement(node) && node.assignedSlot) ||
        (isNode(node) && node.parentNode) ||
        (isShadowRoot(node) && node.host) ||
        getDocumentElement(node));
};
export default getParentNode;

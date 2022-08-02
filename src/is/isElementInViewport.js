import getBoundingClientRect from "../get/getBoundingClientRect";
import getDocumentElement from "../get/getDocumentElement";
import isNode from "./isNode";
const isElementInViewport = (element) => {
    if (!isNode(element))
        return false;
    const { clientWidth, clientHeight } = getDocumentElement(element);
    const { top, left, bottom, right } = getBoundingClientRect(element, true);
    return top >= 0 && left >= 0 && bottom <= clientHeight && right <= clientWidth;
};
export default isElementInViewport;
//# sourceMappingURL=isElementInViewport.js.map
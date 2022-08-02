import getBoundingClientRect from "../get/getBoundingClientRect";
import getDocumentElement from "../get/getDocumentElement";
import isNode from "./isNode";
const isElementInScrollRange = (element) => {
    if (!isNode(element))
        return false;
    const { top, bottom } = getBoundingClientRect(element);
    const { clientHeight } = getDocumentElement(element);
    return top <= clientHeight && bottom >= 0;
};
export default isElementInScrollRange;
//# sourceMappingURL=isElementInScrollRange.js.map
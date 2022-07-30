import getDocument from "../get/getDocument";
import isNode from "../is/isNode";
const querySelectorAll = (selector, parent) => {
    const lookUp = isNode(parent) ? parent : getDocument();
    return lookUp.querySelectorAll(selector);
};
export default querySelectorAll;
//# sourceMappingURL=querySelectorAll.js.map
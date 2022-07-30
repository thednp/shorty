import getDocument from "../get/getDocument";
import isNode from "../is/isNode";
const getElementsByTagName = (selector, parent) => {
    const lookUp = isNode(parent) ? parent : getDocument();
    return lookUp.getElementsByTagName(selector);
};
export default getElementsByTagName;
//# sourceMappingURL=getElementsByTagName.js.map
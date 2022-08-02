import getDocument from '../get/getDocument';
import isNode from '../is/isNode';
const getElementsByClassName = (selector, parent) => {
    const lookUp = parent && isNode(parent) ? parent : getDocument();
    return lookUp.getElementsByClassName(selector);
};
export default getElementsByClassName;
//# sourceMappingURL=getElementsByClassName.js.map
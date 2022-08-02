import getDocument from '../get/getDocument';
import isNode from '../is/isNode';
const querySelector = (selector, parent) => {
    if (isNode(selector)) {
        return selector;
    }
    const lookUp = parent && isNode(parent) ? parent : getDocument();
    return lookUp.querySelector(selector);
};
export default querySelector;

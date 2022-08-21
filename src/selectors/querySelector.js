import getDocument from '../get/getDocument';
import isNode from '../is/isNode';
/**
 * Utility to check if target is typeof `HTMLElement`, `Element`, `Node`
 * or find one that matches a selector.
 *
 * @param selector the input selector or target element
 * @param parent optional node to look into
 * @return the `HTMLElement` or `querySelector` result
 */
const querySelector = (selector, parent) => {
    if (isNode(selector)) {
        return selector;
    }
    const lookUp = parent && isNode(parent) ? parent : getDocument();
    return lookUp.querySelector(selector);
};
export default querySelector;
//# sourceMappingURL=querySelector.js.map
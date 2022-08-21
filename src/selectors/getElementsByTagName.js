import getDocument from '../get/getDocument';
import isNode from '../is/isNode';
/**
 * Shortcut for `HTMLElement.getElementsByTagName` method. Some `Node` elements
 * like `ShadowRoot` do not support `getElementsByTagName`.
 *
 * @param selector the tag name
 * @param parent optional Element to look into
 * @return the 'HTMLCollection'
 */
const getElementsByTagName = (selector, parent) => {
    const lookUp = isNode(parent) ? parent : getDocument();
    return lookUp.getElementsByTagName(selector);
};
export default getElementsByTagName;
//# sourceMappingURL=getElementsByTagName.js.map
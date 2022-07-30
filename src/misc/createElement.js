import setAttribute from "../attr/setAttribute";
import getDocument from "../get/getDocument";
import ObjectEntries from "./ObjectEntries";
const createElement = (param) => {
    if (!param)
        return undefined;
    if (typeof param === "string") {
        return getDocument().createElement(param);
    }
    const { tagName } = param;
    const newElement = createElement(tagName);
    if (!newElement)
        return undefined;
    const attr = { ...param };
    delete attr.tagName;
    ObjectEntries(attr).forEach(([key, value]) => {
        setAttribute(newElement, key, value);
    });
    return newElement;
};
export default createElement;
//# sourceMappingURL=createElement.js.map
import getDocument from "../get/getDocument";
import ObjectEntries from "./ObjectEntries";
import setAttribute from "../attr/setAttribute";
const createElementNS = (ns, param) => {
    if (!ns && !param)
        return undefined;
    if (typeof param === "string") {
        return getDocument().createElementNS(ns, param);
    }
    const { tagName } = param;
    const newElement = createElementNS(ns, tagName);
    if (!newElement)
        return undefined;
    const attr = { ...param };
    delete attr.tagName;
    ObjectEntries(attr).forEach(([key, value]) => {
        setAttribute(newElement, key, value);
    });
    return newElement;
};
export default createElementNS;
//# sourceMappingURL=createElementNS.js.map
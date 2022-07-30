import isCustomElement from "../is/isCustomElement";
import getElementsByTagName from "./getElementsByTagName";
const getCustomElements = (parent) => {
    const collection = getElementsByTagName("*", parent);
    return [...collection].filter(isCustomElement);
};
export default getCustomElements;
//# sourceMappingURL=getCustomElements.js.map
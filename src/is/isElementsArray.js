import isHTMLElement from "./isHTMLElement";
import isArray from "./isArray";
const isElementsArray = (obj) => (isArray(obj) && obj.every(isHTMLElement)) || false;
export default isElementsArray;
//# sourceMappingURL=isElementsArray.js.map
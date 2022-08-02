import getDocumentElement from "../get/getDocumentElement";
const isRTL = (node) => getDocumentElement(node).dir === "rtl";
export default isRTL;
//# sourceMappingURL=isRTL.js.map
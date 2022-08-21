import getDocumentElement from '../get/getDocumentElement';
/**
 * Checks if a page is Right To Left.
 * @param node the target
 * @returns the query result
 */
const isRTL = (node) => getDocumentElement(node).dir === 'rtl';
export default isRTL;
//# sourceMappingURL=isRTL.js.map
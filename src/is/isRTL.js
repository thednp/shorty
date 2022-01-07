import getDocumentElement from '../get/getDocumentElement';

/**
 * Checks if a page is Right To Left.
 * @param {HTMLElement=} node the target
 * @returns {boolean} the query result
 */
const isRTL = (node) => getDocumentElement(node).dir === 'rtl';
export default isRTL;

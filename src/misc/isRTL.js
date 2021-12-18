/**
 * Checks if a page is Right To Left.
 * @returns {boolean} the query result
 */
const isRTL = () => document.documentElement.dir === 'rtl';
export default isRTL;

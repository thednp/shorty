/**
 * Stores a global namespace for Right To Left pages.
 * @returns {boolean} the query result
 */
const isRTL = () => document.documentElement.dir === 'rtl';
export default isRTL;

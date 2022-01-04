/**
 * Checks if a page is Right To Left.
 * @returns {boolean} the query result
 */
const isRTL = () => [
  document.body,
  document.documentElement,
].some((el) => el.dir === 'rtl');
export default isRTL;

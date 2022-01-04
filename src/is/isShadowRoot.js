/**
 * Check if target is a `ShadowRoot`.
 *
 * @param {HTMLElement} element target
 * @returns {boolean} the query result
 */
const isShadowRoot = (element) => {
  // eslint-disable-next-line no-restricted-globals
  const OwnElement = (self || window).ShadowRoot;
  return element instanceof OwnElement || element instanceof ShadowRoot;
};
export default isShadowRoot;

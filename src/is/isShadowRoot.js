import getWindow from '../get/getWindow';
/**
 * Check if target is a `ShadowRoot`.
 *
 * @param {any} element target
 * @returns {boolean} the query result
 */
const isShadowRoot = (element) => {
  const OwnElement = getWindow(element).ShadowRoot;
  return element instanceof OwnElement || element instanceof ShadowRoot;
};
export default isShadowRoot;

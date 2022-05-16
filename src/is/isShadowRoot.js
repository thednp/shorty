/**
 * Check if target is a `ShadowRoot`.
 *
 * @param {any} element target
 * @returns {boolean} the query result
 */
const isShadowRoot = (element) => (element && element.constructor.name === 'ShadowRoot')
  || false;
export default isShadowRoot;

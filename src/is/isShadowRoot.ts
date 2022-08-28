/**
 * Check if target is a `ShadowRoot`.
 *
 * @param element target
 * @returns the query result
 */
const isShadowRoot = (element?: Node | ShadowRoot): element is ShadowRoot =>
  (element && element.constructor.name === 'ShadowRoot') || false;

export default isShadowRoot;

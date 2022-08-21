/**
 * Check if target is a `ShadowRoot`.
 *
 * @param element target
 * @returns the query result
 */
const isShadowRoot = (element) => (element && element.constructor.name === 'ShadowRoot') || false;
export default isShadowRoot;
//# sourceMappingURL=isShadowRoot.js.map
const isShadowRoot = (element) => (element && element.constructor.name === "ShadowRoot") || false;
export default isShadowRoot;

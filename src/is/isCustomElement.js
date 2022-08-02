const isCustomElement = (element) => (element && !!element.shadowRoot) || false;
export default isCustomElement;

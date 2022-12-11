import isHTMLElement from './isHTMLElement.mjs';
import './isNode.mjs';
import './isObject.mjs';

const isCustomElement = (element) => isHTMLElement(element) && !!element.shadowRoot || false;

export { isCustomElement as default };
//# sourceMappingURL=isCustomElement.mjs.map

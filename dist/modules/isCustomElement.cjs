'use strict';

const isHTMLElement = require('./isHTMLElement.cjs');
require('./isNode.cjs');
require('./isObject.cjs');

const isCustomElement = (element) => isHTMLElement(element) && !!element.shadowRoot || false;

module.exports = isCustomElement;
//# sourceMappingURL=isCustomElement.cjs.map

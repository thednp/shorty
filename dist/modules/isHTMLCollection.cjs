'use strict';

const isObject = require('./isObject.cjs');

const isHTMLCollection = (obj) => isObject(obj) && obj.constructor.name === "HTMLCollection" || false;

module.exports = isHTMLCollection;
//# sourceMappingURL=isHTMLCollection.cjs.map

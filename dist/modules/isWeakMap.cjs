'use strict';

const isObject = require('./isObject.cjs');

const isWeakMap = (obj) => isObject(obj) && obj.constructor.name === "WeakMap" || false;

module.exports = isWeakMap;
//# sourceMappingURL=isWeakMap.cjs.map

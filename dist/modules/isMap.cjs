'use strict';

const isObject = require('./isObject.cjs');

const isMap = (obj) => isObject(obj) && obj.constructor.name === "Map" || false;

module.exports = isMap;
//# sourceMappingURL=isMap.cjs.map

'use strict';

const isObject = require('./isObject.cjs');

const ObjectHasOwn = (obj, prop) => isObject(obj) && (Object.hasOwn(obj, prop) || prop in obj);

module.exports = ObjectHasOwn;
//# sourceMappingURL=ObjectHasOwn.cjs.map

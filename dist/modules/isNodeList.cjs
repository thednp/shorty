'use strict';

const isObject = require('./isObject.cjs');

const isNodeList = (obj) => isObject(obj) && obj.constructor.name === "NodeList" || false;

module.exports = isNodeList;
//# sourceMappingURL=isNodeList.cjs.map

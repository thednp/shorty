'use strict';

const isObject = require('./isObject.cjs');

const isWindow = (obj) => isObject(obj) && obj.constructor.name === "Window" || false;

module.exports = isWindow;
//# sourceMappingURL=isWindow.cjs.map

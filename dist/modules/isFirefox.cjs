'use strict';

const userAgent = require('./userAgent-a030ce52.cjs');

const isFirefox = userAgent.userAgent ? userAgent.userAgent.includes("Firefox") : false;

module.exports = isFirefox;
//# sourceMappingURL=isFirefox.cjs.map

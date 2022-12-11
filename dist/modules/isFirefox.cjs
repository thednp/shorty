'use strict';

const userAgent = require('./userAgent.e80e0b06.cjs');

const isFirefox = userAgent.userAgent ? userAgent.userAgent.includes("Firefox") : false;

module.exports = isFirefox;
//# sourceMappingURL=isFirefox.cjs.map

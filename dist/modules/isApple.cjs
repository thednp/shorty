'use strict';

const userAgentData = require('./userAgentData.3515f3a8.cjs');
const userAgent = require('./userAgent.e80e0b06.cjs');

const appleBrands = /(iPhone|iPod|iPad)/;
const isApple = userAgentData.userAgentData ? userAgentData.userAgentData.brands.some((x) => appleBrands.test(x.brand)) : appleBrands.test(userAgent.userAgent);

module.exports = isApple;
//# sourceMappingURL=isApple.cjs.map
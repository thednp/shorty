'use strict';

const userAgentData = require('./userAgentData-ac721cb0.cjs');
const userAgent = require('./userAgent-a030ce52.cjs');

const appleBrands = /(iPhone|iPod|iPad)/;
const isApple = userAgentData.userAgentData ? userAgentData.userAgentData.brands.some((x) => appleBrands.test(x.brand)) : appleBrands.test(userAgent.userAgent);

module.exports = isApple;
//# sourceMappingURL=isApple.cjs.map

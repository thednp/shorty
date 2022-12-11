'use strict';

const userAgentData = require('./userAgentData-ac721cb0.cjs');
const userAgent = require('./userAgent-a030ce52.cjs');

const mobileBrands = /iPhone|iPad|iPod|Android/i;
let isMobileCheck = false;
if (userAgentData.userAgentData) {
  isMobileCheck = userAgentData.userAgentData.brands.some((x) => mobileBrands.test(x.brand));
} else {
  isMobileCheck = mobileBrands.test(userAgent.userAgent);
}
const isMobile = isMobileCheck;

module.exports = isMobile;
//# sourceMappingURL=isMobile.cjs.map

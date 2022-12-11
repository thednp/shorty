import { u as userAgentData } from './userAgentData.ce4345e4.js';
import { u as userAgent } from './userAgent.9185cc6f.js';

const mobileBrands = /iPhone|iPad|iPod|Android/i;
let isMobileCheck = false;
if (userAgentData) {
  isMobileCheck = userAgentData.brands.some((x) => mobileBrands.test(x.brand));
} else {
  isMobileCheck = mobileBrands.test(userAgent);
}
const isMobile = isMobileCheck;

export { isMobile as default };
//# sourceMappingURL=isMobile.mjs.map

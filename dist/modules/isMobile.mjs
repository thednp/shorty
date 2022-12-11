import { u as userAgentData } from './userAgentData-f663509b.js';
import { u as userAgent } from './userAgent-9f81746a.js';

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

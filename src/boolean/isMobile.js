import userAgentData from '../strings/userAgentData';
import userAgent from '../strings/userAgent';

const mobileBrands = /iPhone|iPad|iPod|Android/i;
let isMobileCheck = false;

if (userAgentData) {
  isMobileCheck = userAgentData.brands
    .some((/** @type {Record<String, any>} */x) => mobileBrands.test(x.brand));
} else {
  isMobileCheck = mobileBrands.test(userAgent);
}

/**
 * A global `boolean` for mobile detection.
 * @type {boolean}
 */
const isMobile = isMobileCheck;

export default isMobile;

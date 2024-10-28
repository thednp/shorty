import userAgentData from "../strings/userAgentData";
import userAgent from "../strings/userAgent";

const mobileBrands = /iPhone|iPad|iPod|Android/i;
let isMobile = false;

// istanbul ignore else @preserve
if (userAgentData) {
  isMobile = userAgentData.brands.some((x) => mobileBrands.test(x.brand));
} else {
  isMobile = mobileBrands.test(userAgent);
}

/**
 * A global `boolean` for mobile detection.
 */
// const isMobile = isMobileCheck;

export default isMobile;

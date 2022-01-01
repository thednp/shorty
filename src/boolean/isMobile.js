import userAgentData from '../strings/userAgentData';

const mobileBrands = /iPhone|iPad|iPod|Android/i;
let isMobileCheck = false;

// @ts-ignore
if (navigator[userAgentData]) {
  // @ts-ignore
  isMobileCheck = navigator[userAgentData].brands.some((x) => mobileBrands.test(x.brand));
} else {
  isMobileCheck = mobileBrands.test(navigator.userAgent);
}

/**
 * A global namespace for mobile detection.
 * @type {boolean}
 */
const isMobile = isMobileCheck;

export default isMobile;

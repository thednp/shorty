// import userAgentData from "../strings/userAgentData";
// import userAgent from "../strings/userAgent";
import type { NavigatorUA } from "../interface/navigatorUA";

// let isMobile = false;

// istanbul ignore else @preserve
// if (userAgentData) {
//   isMobile = userAgentData.brands.some((x) => mobileBrands.test(x.brand));
// } else {
//   isMobile = mobileBrands.test(userAgent);
// }

/**
 * A global `boolean` for mobile detection.
 */
const isMobile = () => {
  const mobileBrands = /iPhone|iPad|iPod|Android/i;

  return (navigator as NavigatorUA).userAgentData?.brands.some((x) =>
    mobileBrands.test(x.brand)
  ) ||
    mobileBrands.test(navigator?.userAgent) || false;
};
export default isMobile;

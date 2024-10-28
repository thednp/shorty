import type { NavigatorUA } from "../interface/navigatorUA";

/**
 * A global `boolean` for mobile detection.
 */
const isMobile = () => {
  const mobileBrands = /iPhone|iPad|iPod|Android/i;

  return (navigator as NavigatorUA)?.userAgentData?.brands.some((x) =>
    mobileBrands.test(x.brand)
  ) ||
    mobileBrands.test(navigator?.userAgent) || false;
};
export default isMobile;

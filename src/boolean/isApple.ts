import type { NavigatorUA } from "../interface/navigatorUA";

/**
 * A global `boolean` getter for Apple browsers.
 */
const isApple = () => {
  const appleBrands = /(iPhone|iPod|iPad)/;
  return (navigator as NavigatorUA).userAgentData?.brands.some((x) =>
    appleBrands.test(x.brand)
  ) || /* istanbul ignore next @preserve */
    appleBrands.test(
      navigator.userAgent,
    ) || false;
};
export default isApple;

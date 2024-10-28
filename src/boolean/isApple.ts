import type { NavigatorUA, NavigatorUABrand } from "../interface/navigatorUA";

const appleBrands = /(iPhone|iPod|iPad)/;

/**
 * A global `boolean` getter for Apple browsers.
 */
const isApple =
  (navigator as NavigatorUA).userAgentData?.brands.some((x: NavigatorUABrand) =>
    appleBrands.test(x.brand)
  ) || /* istanbul ignore next @preserve */
  appleBrands.test(
    navigator.userAgent,
  );

export default isApple;

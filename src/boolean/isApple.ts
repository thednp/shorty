import type { NavigatorUA, NavigatorUABrand } from "../interface/navigatorUA";

/**
 * A global `boolean` getter for Apple browsers.
 */
const isApple = () => {
  const userAgentData = (navigator as NavigatorUA).userAgentData;
  const appleBrands = /(iPhone|iPod|iPad)/;
  return userAgentData
    ? userAgentData.brands.some((x: NavigatorUABrand) =>
      appleBrands.test(x.brand)
    )
    : /* istanbul ignore next @preserve */ appleBrands.test(
      navigator.userAgent,
    );
};

export default isApple;

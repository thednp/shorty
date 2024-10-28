import type { NavigatorUABrand } from "../interface/navigatorUA";
import userAgentData from "../strings/userAgentData";
import userAgent from "../strings/userAgent";

/**
 * A global `boolean` getter for Apple browsers.
 */
const isApple = () => {
  const appleBrands = /(iPhone|iPod|iPad)/;
  return userAgentData
    ? userAgentData.brands.some((x: NavigatorUABrand) =>
      appleBrands.test(x.brand)
    )
    : /* istanbul ignore next @preserve */ appleBrands.test(userAgent);
};

export default isApple;

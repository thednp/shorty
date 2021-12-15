const appleBrands = /(iPhone|iPod|iPad)/;

/**
 * A global namespace for Apple browsers.
 */
// @ts-ignore
const { userAgentData } = navigator;
const isApple = !userAgentData ? appleBrands.test(navigator.userAgent)
  : userAgentData.brands.some((x) => appleBrands.test(x.brand));

export default isApple;

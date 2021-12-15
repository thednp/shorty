// @ts-ignore
const { userAgentData } = navigator;
const appleBrands = /(iPhone|iPod|iPad)/;

/**
 * A global namespace for Apple browsers.
 * @type {boolean}
 */
const isApple = !userAgentData ? appleBrands.test(navigator.userAgent)
  : userAgentData.brands.some((x) => appleBrands.test(x.brand));

export default isApple;

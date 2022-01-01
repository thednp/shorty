import userAgentData from '../strings/userAgentData';

/** @type {Record<string, any>} */
// @ts-ignore
const agentData = navigator[userAgentData];
const appleBrands = /(iPhone|iPod|iPad)/;

/**
 * A global boolean for Apple browsers.
 * @type {boolean}
 */
const isApple = !agentData ? appleBrands.test(navigator.userAgent)
  : agentData.brands.some((/** @type {Record<string, any>} */x) => appleBrands.test(x.brand));

export default isApple;

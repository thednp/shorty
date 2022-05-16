import userAgentData from '../strings/userAgentData';
import userAgent from '../strings/userAgent';

const appleBrands = /(iPhone|iPod|iPad)/;

/**
 * A global `boolean` for Apple browsers.
 * @type {boolean}
 */
const isApple = !userAgentData ? /* istanbul ignore next */appleBrands.test(userAgent)
  : userAgentData.brands.some((/** @type {Record<string, any>} */x) => appleBrands.test(x.brand));

export default isApple;

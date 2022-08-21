import userAgentData from '../strings/userAgentData';
import userAgent from '../strings/userAgent';
const appleBrands = /(iPhone|iPod|iPad)/;
/**
 * A global `boolean` for Apple browsers.
 */
const isApple = userAgentData
    ? userAgentData.brands.some((x) => appleBrands.test(x.brand))
    : /* istanbul ignore next */ appleBrands.test(userAgent);
export default isApple;
//# sourceMappingURL=isApple.js.map
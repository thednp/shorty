import userAgentData from "../strings/userAgentData";
import userAgent from "../strings/userAgent";
const appleBrands = /(iPhone|iPod|iPad)/;
const isApple = userAgentData
    ? userAgentData.brands.some((x) => appleBrands.test(x.brand))
    : appleBrands.test(userAgent);
export default isApple;

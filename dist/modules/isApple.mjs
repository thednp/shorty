import { u as userAgentData } from './userAgentData-f663509b.js';
import { u as userAgent } from './userAgent-9f81746a.js';

const appleBrands = /(iPhone|iPod|iPad)/;
const isApple = userAgentData ? userAgentData.brands.some((x) => appleBrands.test(x.brand)) : appleBrands.test(userAgent);

export { isApple as default };
//# sourceMappingURL=isApple.mjs.map

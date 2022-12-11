import { u as userAgentData } from './userAgentData.ce4345e4.js';
import { u as userAgent } from './userAgent.9185cc6f.js';

const appleBrands = /(iPhone|iPod|iPad)/;
const isApple = userAgentData ? userAgentData.brands.some((x) => appleBrands.test(x.brand)) : appleBrands.test(userAgent);

export { isApple as default };
//# sourceMappingURL=isApple.mjs.map

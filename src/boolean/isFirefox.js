import userAgent from '../strings/userAgent';

/**
 * A global boolean for Gecko browsers. When writing this file,
 * Gecko was not supporting `userAgentData`.
 */
const isFirefox = userAgent ? userAgent.includes('Firefox') : false;
export default isFirefox;

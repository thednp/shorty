import userAgent from '../strings/userAgent';

/**
 * A global boolean for Gecko browsers.
 */
const isFirefox = userAgent ? userAgent.includes('Firefox') : false;
export default isFirefox;

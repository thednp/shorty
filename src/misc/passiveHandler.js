import supportPassive from '../boolean/supportPassive';

/**
 * A global namespace for most scroll event listeners.
 */
const passiveHandler = supportPassive ? { passive: true } : false;

export default passiveHandler;

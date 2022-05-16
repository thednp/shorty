import supportPassive from '../boolean/supportPassive';

/**
 * A global namespace for most scroll event listeners in legacy browsers.
 * @type {Partial<AddEventListenerOptions> | boolean}
 */
const passiveHandler = supportPassive ? { passive: true }
  : /* istanbul ignore next */false;

export default passiveHandler;

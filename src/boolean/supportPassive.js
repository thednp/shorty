import DOMContentLoadedEvent from '../strings/DOMContentLoadedEvent';
import one from '../event/one';

/**
 * A global namespace for passive events support.
 * @type {boolean}
 */
const supportPassive = (() => {
  let result = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get() {
        result = true;
        return result;
      },
    });
    one(document, DOMContentLoadedEvent, () => {}, opts);
  } catch (e) {
    throw Error('Passive events are not supported');
  }

  return result;
})();

export default supportPassive;

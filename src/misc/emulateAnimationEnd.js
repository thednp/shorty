import animationEndEvent from '../strings/animationEndEvent';
import getElementAnimationDelay from '../get/getElementAnimationDelay';
import getElementAnimationDuration from '../get/getElementAnimationDuration';
import dispatchEvent from './dispatchEvent';

/**
 * Utility to make sure callbacks are consistently
 * called when animation ends.
 *
 * @param {HTMLElement} element target
 * @param {EventListener} handler `animationend` callback
 */
export default function emulateAnimationEnd(element, handler) {
  let called = 0;
  const endEvent = new Event(animationEndEvent);
  const duration = getElementAnimationDuration(element);
  const delay = getElementAnimationDelay(element);

  if (duration) {
    /**
     * Wrap the handler in on -> off callback
     * @type {EventListener}
     */
    const animationEndWrapper = (e) => {
      /* istanbul ignore else */
      if (e.target === element) {
        handler.apply(element, [e]);
        element.removeEventListener(animationEndEvent, animationEndWrapper);
        called = 1;
      }
    };
    element.addEventListener(animationEndEvent, animationEndWrapper);
    setTimeout(() => {
      /* istanbul ignore next */
      if (!called) dispatchEvent(element, endEvent);
    }, duration + delay + 17);
  } else {
    handler.apply(element, [endEvent]);
  }
}

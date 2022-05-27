import supportAnimation from '../boolean/supportAnimation';
import animationEndEventLegacy from '../strings/animationEndEventLegacy';
import getElementAnimationDelay from '../get/getElementAnimationDelayLegacy';
import getElementAnimationDuration from '../get/getElementAnimationDurationLegacy';
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
  const endEvent = new Event(animationEndEventLegacy);
  const duration = getElementAnimationDuration(element);
  const delay = getElementAnimationDelay(element);

  if (supportAnimation && duration) {
    /**
     * Wrap the handler in on -> off callback
     * @param {Event} e Event object
     */
    const animationEndWrapper = (e) => {
      /* istanbul ignore else */
      if (e.target === element) {
        handler.apply(element, [e]);
        element.removeEventListener(animationEndEventLegacy, animationEndWrapper);
        called = 1;
      }
    };
    element.addEventListener(animationEndEventLegacy, animationEndWrapper);
    setTimeout(() => {
      /* istanbul ignore next */
      if (!called) dispatchEvent(element, endEvent);
    }, duration + delay + 17);
  } else {
    handler.apply(element, [endEvent]);
  }
}

import supportTransition from '../boolean/supportTransition';
import transitionEndEventLegacy from '../strings/transitionEndEventLegacy';
import getElementTransitionDelay from '../get/getElementTransitionDelayLegacy';
import getElementTransitionDuration from '../get/getElementTransitionDurationLegacy';
import dispatchEvent from './dispatchEvent';

/**
 * Utility to make sure callbacks are consistently
 * called when transition ends.
 *
 * @param {HTMLElement} element target
 * @param {EventListener} handler `transitionend` callback
 */
export default function emulateTransitionEnd(element, handler) {
  let called = 0;
  const endEvent = new Event(transitionEndEventLegacy);
  const duration = getElementTransitionDuration(element);
  const delay = getElementTransitionDelay(element);

  if (supportTransition && duration) {
    /**
     * Wrap the handler in on -> off callback
     * @param {Event} e Event object
     */
    const transitionEndWrapper = (e) => {
      /* istanbul ignore else */
      if (e.target === element) {
        handler.apply(element, [e]);
        element.removeEventListener(transitionEndEventLegacy, transitionEndWrapper);
        called = 1;
      }
    };
    element.addEventListener(transitionEndEventLegacy, transitionEndWrapper);
    setTimeout(() => {
      /* istanbul ignore next */
      if (!called) dispatchEvent(element, endEvent);
    }, duration + delay + 17);
  } else {
    handler.apply(element, [endEvent]);
  }
}

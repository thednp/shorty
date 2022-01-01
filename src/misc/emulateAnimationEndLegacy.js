import supportAnimation from '../boolean/supportAnimation';
import animationEndEvent from '../strings/animationEndEventLegacy';
import getElementAnimationDelay from './getElementAnimationDelayLegacy';
import getElementAnimationDuration from './getElementAnimationDurationLegacy';

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

  if (supportAnimation && duration) {
    /**
     * Wrap the handler in on -> off callback
     * @param {Event} e Event object
     */
    const animationEndWrapper = (e) => {
      if (e.target === element) {
        handler.apply(element, [e]);
        element.removeEventListener(animationEndEvent, animationEndWrapper);
        called = 1;
      }
    };
    element.addEventListener(animationEndEvent, animationEndWrapper);
    setTimeout(() => {
      if (!called) element.dispatchEvent(endEvent);
    }, duration + delay + 17);
  } else {
    handler.apply(element, [endEvent]);
  }
}

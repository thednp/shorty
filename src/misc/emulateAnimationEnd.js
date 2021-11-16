import animationEndEvent from '../strings/animationEndEvent.js';
import getElementAnimationDelay from './getElementAnimationDelay.js';
import getElementAnimationDuration from './getElementAnimationDuration.js';

/**
 * Utility to make sure callbacks are consistently
 * called when animation ends.
 *
 * @param {Element} element target
 * @param {Function} handler callback
 */
export default function emulateAnimationEnd(element, handler) {
  let called = 0;
  const endEvent = new Event(animationEndEvent);
  const duration = getElementAnimationDuration(element);
  const delay = getElementAnimationDelay(element);

  if (duration) {
    /**
     * Wrap the handler in on -> off callback
     * @param {object | Event} e Event object
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

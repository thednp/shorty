import transitionEndEvent from '../strings/transitionEndEvent';
import getElementTransitionDelay from '../get/getElementTransitionDelay';
import getElementTransitionDuration from '../get/getElementTransitionDuration';

/**
 * Utility to make sure callbacks are consistently
 * called when transition ends.
 *
 * @param {HTMLElement | Element} element target
 * @param {EventListener} handler `transitionend` callback
 */
export default function emulateTransitionEnd(element, handler) {
  let called = 0;
  const endEvent = new Event(transitionEndEvent);
  const duration = getElementTransitionDuration(element);
  const delay = getElementTransitionDelay(element);

  if (duration) {
    /**
     * Wrap the handler in on -> off callback
     * @type {EventListener} e Event object
     */
    const transitionEndWrapper = (e) => {
      if (e.target === element) {
        handler.apply(element, [e]);
        element.removeEventListener(transitionEndEvent, transitionEndWrapper);
        called = 1;
      }
    };
    element.addEventListener(transitionEndEvent, transitionEndWrapper);
    setTimeout(() => {
      if (!called) element.dispatchEvent(endEvent);
    }, duration + delay + 17);
  } else {
    handler.apply(element, [endEvent]);
  }
}

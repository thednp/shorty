import animationEndEvent from '../strings/animationEndEvent';
import getElementAnimationDelay from '../get/getElementAnimationDelay';
import getElementAnimationDuration from '../get/getElementAnimationDuration';
import on from '../event/on';
import off from '../event/off';

/**
 * Utility to make sure callbacks are consistently
 * called when animation ends.
 *
 * @param {HTMLElement | Element} element target
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
     * @param {AnimationEvent} e Event object
     */
    const animationEndWrapper = (e) => {
      if (e.target === element) {
        handler.apply(element, [e]);
        off(element, animationEndEvent, animationEndWrapper);
        called = 1;
      }
    };
    on(element, animationEndEvent, animationEndWrapper);
    setTimeout(() => {
      if (!called) element.dispatchEvent(endEvent);
    }, duration + delay + 17);
  } else {
    handler.apply(element, [endEvent]);
  }
}

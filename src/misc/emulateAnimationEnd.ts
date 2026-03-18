import animationEndEvent from "../strings/animationEndEvent.ts";
import getElementAnimationDelay from "../get/getElementAnimationDelay.ts";
import getElementAnimationDuration from "../get/getElementAnimationDuration.ts";
import dispatchEvent from "./dispatchEvent.ts";

/**
 * Utility to make sure callbacks are consistently
 * called when animation ends.
 *
 * @param element target
 * @param handler `animationend` callback
 */
const emulateAnimationEnd = (
  element: Element,
  handler: EventListener,
): void => {
  let called = 0;
  const endEvent = new Event(animationEndEvent);
  const duration = getElementAnimationDuration(element);
  const delay = getElementAnimationDelay(element);

  if (duration) {
    // Wrap the handler in on -> off callback
    const animationEndWrapper = (e: Event): void => {
      /* istanbul ignore else @preserve */
      if (e.target === element) {
        handler.apply(element, [e]);
        element.removeEventListener(animationEndEvent, animationEndWrapper);
        called = 1;
      }
    };
    element.addEventListener(animationEndEvent, animationEndWrapper);
    setTimeout(() => {
      /* istanbul ignore next @preserve */
      if (!called) dispatchEvent(element, endEvent);
    }, duration + delay + 17);
  } else {
    /* istanbul ignore next @preserve */
    handler.apply(element, [endEvent]);
  }
};

export default emulateAnimationEnd;

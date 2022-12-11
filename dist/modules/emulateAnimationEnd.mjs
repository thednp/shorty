import getElementAnimationDelay from './getElementAnimationDelay.mjs';
import getElementAnimationDuration from './getElementAnimationDuration.mjs';
import dispatchEvent from './dispatchEvent.mjs';
import './animationName.cd498a97.js';
import './getElementStyle.mjs';

const animationEndEvent = "animationend";

const emulateAnimationEnd = (element, handler) => {
  let called = 0;
  const endEvent = new Event(animationEndEvent);
  const duration = getElementAnimationDuration(element);
  const delay = getElementAnimationDelay(element);
  if (duration) {
    const animationEndWrapper = (e) => {
      if (e.target === element) {
        handler.apply(element, [e]);
        element.removeEventListener(animationEndEvent, animationEndWrapper);
        called = 1;
      }
    };
    element.addEventListener(animationEndEvent, animationEndWrapper);
    setTimeout(() => {
      if (!called)
        dispatchEvent(element, endEvent);
    }, duration + delay + 17);
  } else {
    handler.apply(element, [endEvent]);
  }
};

export { emulateAnimationEnd as default };
//# sourceMappingURL=emulateAnimationEnd.mjs.map

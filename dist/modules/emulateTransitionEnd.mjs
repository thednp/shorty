import getElementTransitionDelay from './getElementTransitionDelay.mjs';
import getElementTransitionDuration from './getElementTransitionDuration.mjs';
import dispatchEvent from './dispatchEvent.mjs';
import './transitionProperty-cab1f1bf.js';
import './getElementStyle.mjs';

const transitionEndEvent = "transitionend";

const emulateTransitionEnd = (element, handler) => {
  let called = 0;
  const endEvent = new Event(transitionEndEvent);
  const duration = getElementTransitionDuration(element);
  const delay = getElementTransitionDelay(element);
  if (duration) {
    const transitionEndWrapper = (e) => {
      if (e.target === element) {
        handler.apply(element, [e]);
        element.removeEventListener(transitionEndEvent, transitionEndWrapper);
        called = 1;
      }
    };
    element.addEventListener(transitionEndEvent, transitionEndWrapper);
    setTimeout(() => {
      if (!called)
        dispatchEvent(element, endEvent);
    }, duration + delay + 17);
  } else {
    handler.apply(element, [endEvent]);
  }
};

export { emulateTransitionEnd as default };
//# sourceMappingURL=emulateTransitionEnd.mjs.map

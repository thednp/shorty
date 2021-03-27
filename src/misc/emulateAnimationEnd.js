import animationEndEvent from '../strings/animationEndEvent.js';
import getElementAnimationDuration from './getElementAnimationDuration.js';

export default function emulateAnimationEnd(element, handler) {
  let called = 0;
  const endEvent = new Event(animationEndEvent);
  const duration = getElementAnimationDuration(element);

  if (duration) {
    element.addEventListener(animationEndEvent, function animationEndWrapper(e) {
      if (e.target === element) {
        handler.apply(element, [e]);
        element.removeEventListener(animationEndEvent, animationEndWrapper);
        called = 1;
      }
    });
    setTimeout(() => {
      if (!called) element.dispatchEvent(endEvent);
    }, duration + 17);
  } else {
    handler.apply(element, [endEvent]);
  }
}

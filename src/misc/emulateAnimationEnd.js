import animationEndEvent from '../strings/animationEndEvent.js';
import getElementAnimationDuration from './getElementAnimationDuration.js';

// emulateTransitionEnd
export default function(element,handler){ 
  let called = 0, duration = getElementAnimationDuration(element);
  duration ? element.addEventListener( animationEndEvent, function animationEndWrapper(e){ 
              !called && handler(e); called = 1
              element.removeEventListener( animationEndEvent, animationEndWrapper)
            }) : handler()
  setTimeout(function() { !called && handler(); called = 1 }, duration || 17)
}
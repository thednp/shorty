import transitionEndEvent from '../strings/transitionEndEvent.js';
import getElementTransitionDuration from './getElementTransitionDuration.js';

// emulateTransitionEnd
export default function(element,handler){ 
  let called = 0, duration = getElementTransitionDuration(element);
  duration ? element.addEventListener( transitionEndEvent, function transitionEndWrapper(e){ 
              handler.apply(element,[e]); called = 1
              element.removeEventListener( transitionEndEvent, transitionEndWrapper)
            }) : handler()
  setTimeout(function() { !called && handler(); called = 1 }, duration || 17)
}
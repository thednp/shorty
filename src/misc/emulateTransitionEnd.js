// import one from '../event/one.js';
import transitionEndEvent from '../strings/transitionEndEvent.js';
import getElementTransitionDuration from './getElementTransitionDuration.js';

// emulateTransitionEnd
export default function(element,handler){ 
  let called = 0, duration = getElementTransitionDuration(element);
  duration ? element.addEventListener( transitionEndEvent, function transitionEndWrapper(e){ 
              !called && handler(e), called = 1; 
              element.removeEventListener( transitionEndEvent, transitionEndWrapper)
            })
           : setTimeout(function() { !called && handler(), called = 1; }, 17);
}
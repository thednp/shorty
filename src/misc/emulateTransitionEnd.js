import transitionEndEvent from '../strings/transitionEndEvent.js';
import getElementTransitionDuration from './getElementTransitionDuration.js';

// emulateTransitionEnd
export default function(element,handler){ 
  let called = 0, 
      endEvent = new Event( transitionEndEvent ),
      duration = getElementTransitionDuration(element)

  if ( duration ) {
    element.addEventListener( transitionEndEvent, function transitionEndWrapper(e){ 
      if ( e.target === element ) {
        handler.apply( element, [e] )
        element.removeEventListener( transitionEndEvent, transitionEndWrapper)
        called = 1
      }
    })
    setTimeout(function() { 
      !called && element.dispatchEvent( endEvent )
    }, duration + 17 )
  } else { handler.apply( element, [endEvent]) }
}
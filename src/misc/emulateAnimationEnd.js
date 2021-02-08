import animationEndEvent from '../strings/animationEndEvent.js';
import getElementAnimationDuration from './getElementAnimationDuration.js';

export default function(element,handler){ 
  let called = 0,
      endEvent = new Event( animationEndEvent ),
      duration = getElementAnimationDuration( element )

  if ( duration ) {
    element.addEventListener( animationEndEvent, function animationEndWrapper(e){ 
      if ( e.target === element ) {
        handler.apply( element, [e] )
        element.removeEventListener( animationEndEvent, animationEndWrapper)
        called = 1
      }
    })
    setTimeout(function() { 
      !called && element.dispatchEvent( endEvent )
    }, duration + 17 )
  } else { handler.apply( element, [endEvent]) }
}
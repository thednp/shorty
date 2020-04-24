import { one } from '../event/one.js';
import { transitionEndEvent } from '../strings/transitionEndEvent.js';
import { getElementTransitionDuration } from './getElementTransitionDuration.js';

// emulateTransitionEnd
export function emulateTransitionEnd (element,handler){ 
  let called = 0, duration = getElementTransitionDuration(element);
  duration ? one(element, transitionEndEvent, function(e){ !called && handler(e), called = 1; })
           : setTimeout(function() { !called && handler(), called = 1; }, 17);
}
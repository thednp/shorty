// strings FIRST
import mouseClickEvents from './strings/mouseClickEvents.js';
import mouseHoverEvents from './strings/mouseHoverEvents.js';
import touchEvents from './strings/touchEvents.js';
import focusEvents from './strings/focusEvents.js';
import mouseSwipeEvents from './strings/mouseSwipeEvents.js';
import animationDuration from './strings/animationDuration.js';
import animationDelay from './strings/animationDelay.js';
import animationEndEvent from './strings/animationEndEvent.js';
import animationName from './strings/animationName.js';
import transitionDuration from './strings/transitionDuration.js';
import transitionProperty from './strings/transitionProperty.js';
import transitionDelay from './strings/transitionDelay.js';
import transitionEndEvent from './strings/transitionEndEvent.js';
import bezierEasings from './strings/bezierEasings.js';
import addEventListener from './strings/addEventListener.js';
import removeEventListener from './strings/removeEventListener.js';

// boolean
import isMobile from './boolean/isMobile.js';
import support3DTransform from './boolean/support3DTransform.js';
import supportPassive from './boolean/supportPassive.js';
import supportTransform from './boolean/supportTransform.js';
import supportTouch from './boolean/supportTouch.js';
import supportAnimation from './boolean/supportAnimation.js';
import supportTransition from './boolean/supportTransition.js';

// class
import addClass from './class/addClass.js';
import removeClass from './class/removeClass.js';
import hasClass from './class/hasClass.js';

// event
import on from './event/on.js';
import off from './event/off.js';
import one from './event/one.js';

// misc
import emulateAnimationEnd from './misc/emulateAnimationEnd.js';
import emulateTransitionEnd from './misc/emulateTransitionEnd.js';
import isElementInScrollRange from './misc/isElementInScrollRange.js';
import isElementInViewport from './misc/isElementInViewport.js';
import passiveHandler from './misc/passiveHandler.js';
import getElementAnimationDuration from './misc/getElementAnimationDuration.js';
import getElementAnimationDelay from './misc/getElementAnimationDelay.js';
import getElementTransitionDuration from './misc/getElementTransitionDuration.js';
import getElementTransitionDelay from './misc/getElementTransitionDelay.js';
import queryElement from './misc/queryElement.js';
import normalizeOptions from './misc/normalizeOptions.js';
import normalizeValue from './misc/normalizeValue.js';
import tryWrapper from './misc/tryWrapper.js';
import reflow from './misc/reflow.js';

export default {
  mouseClickEvents,
  mouseHoverEvents,
  touchEvents,
  focusEvents,
  mouseSwipeEvents,
  bezierEasings,
  animationDuration,
  animationDelay,
  animationName,
  animationEndEvent,
  transitionDuration,
  transitionDelay,
  transitionEndEvent,
  transitionProperty,
  isMobile,
  support3DTransform,
  supportPassive,
  supportTransform,
  supportTouch,
  supportAnimation,
  supportTransition,
  addEventListener,
  removeEventListener,
  addClass,
  removeClass,
  hasClass,
  on,
  off,
  one,
  emulateAnimationEnd,
  emulateTransitionEnd,
  isElementInScrollRange,
  isElementInViewport,
  passiveHandler,
  getElementAnimationDuration,
  getElementAnimationDelay,
  getElementTransitionDuration,
  getElementTransitionDelay,
  queryElement,
  normalizeValue,
  normalizeOptions,
  tryWrapper,
  reflow,
};

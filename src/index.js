// strings FIRST
import ariaChecked from './strings/ariaChecked';
import ariaDescribedBy from './strings/ariaDescribedBy';
import ariaExpanded from './strings/ariaExpanded';
import ariaHidden from './strings/ariaHidden';
import ariaLabel from './strings/ariaLabel';
import ariaLabelledBy from './strings/ariaLabelledBy';
import ariaModal from './strings/ariaModal';
import ariaPressed from './strings/ariaPressed';
import ariaSelected from './strings/ariaSelected';

import mouseClickEvents from './strings/mouseClickEvents';
import mouseHoverEvents from './strings/mouseHoverEvents';
import touchEvents from './strings/touchEvents';
import focusEvents from './strings/focusEvents';
import mouseSwipeEvents from './strings/mouseSwipeEvents';
import animationDuration from './strings/animationDuration';
import animationDelay from './strings/animationDelay';
import animationEndEvent from './strings/animationEndEvent';
import animationName from './strings/animationName';
import transitionDuration from './strings/transitionDuration';
import transitionProperty from './strings/transitionProperty';
import transitionDelay from './strings/transitionDelay';
import transitionEndEvent from './strings/transitionEndEvent';
import bezierEasings from './strings/bezierEasings';
import addEventListener from './strings/addEventListener';
import removeEventListener from './strings/removeEventListener';

// boolean
import isMobile from './boolean/isMobile';
import support3DTransform from './boolean/support3DTransform';
import supportPassive from './boolean/supportPassive';
import supportTransform from './boolean/supportTransform';
import supportTouch from './boolean/supportTouch';
import supportAnimation from './boolean/supportAnimation';
import supportTransition from './boolean/supportTransition';

// class
import addClass from './class/addClass';
import removeClass from './class/removeClass';
import hasClass from './class/hasClass';

// event
import on from './event/on';
import off from './event/off';
import one from './event/one';

// misc
import emulateAnimationEnd from './misc/emulateAnimationEnd';
import emulateTransitionEnd from './misc/emulateTransitionEnd';
import isElementInScrollRange from './misc/isElementInScrollRange';
import isElementInViewport from './misc/isElementInViewport';
import isHTMLElement from './misc/isHTMLElement';
import isElement from './misc/isElement';
import isMedia from './misc/isMedia';
import isRTL from './misc/isRTL';
import passiveHandler from './misc/passiveHandler';
import getElementAnimationDuration from './misc/getElementAnimationDuration';
import getElementAnimationDelay from './misc/getElementAnimationDelay';
import getElementTransitionDuration from './misc/getElementTransitionDuration';
import getElementTransitionDelay from './misc/getElementTransitionDelay';
import queryElement from './misc/queryElement';
import normalizeOptions from './misc/normalizeOptions';
import normalizeValue from './misc/normalizeValue';
import tryWrapper from './misc/tryWrapper';
import reflow from './misc/reflow';

import Version from './misc/version';

const SHORTER = {
  ariaChecked,
  ariaDescribedBy,
  ariaExpanded,
  ariaHidden,
  ariaLabel,
  ariaLabelledBy,
  ariaModal,
  ariaPressed,
  ariaSelected,
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
  isElement,
  isHTMLElement,
  isMedia,
  isRTL,
  queryElement,
  normalizeValue,
  normalizeOptions,
  tryWrapper,
  reflow,
  Version,
};

export default SHORTER;

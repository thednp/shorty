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
import mouseclickEvent from './strings/mouseclickEvent';
import mousedownEvent from './strings/mousedownEvent';
import mouseupEvent from './strings/mouseupEvent';
import mouseHoverEvents from './strings/mouseHoverEvents';
import mouseenterEvent from './strings/mouseenterEvent';
import mouseleaveEvent from './strings/mouseleaveEvent';
import touchEvents from './strings/touchEvents';
import touchstartEvent from './strings/touchstartEvent';
import touchmoveEvent from './strings/touchmoveEvent';
import touchcancelEvent from './strings/touchcancelEvent';
import touchendEvent from './strings/touchendEvent';
import focusEvents from './strings/focusEvents';
import focusinEvent from './strings/focusinEvent';
import focusoutEvent from './strings/focusoutEvent';
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

import keyboardEventKeys from './strings/keyboardEventKeys';
import keyAlt from './strings/keyAlt';
import keyArrowDown from './strings/keyArrowDown';
import keyArrowUp from './strings/keyArrowUp';
import keyArrowLeft from './strings/keyArrowLeft';
import keyArrowRight from './strings/keyArrowRight';
import keyBackspace from './strings/keyBackspace';
import keyCapsLock from './strings/keyCapsLock';
import keyControl from './strings/keyControl';
import keyDelete from './strings/keyDelete';
import keyEnter from './strings/keyEnter';
import keyInsert from './strings/keyInsert';
import keyMeta from './strings/keyMeta';
import keyPause from './strings/keyPause';
import keyScrollLock from './strings/keyScrollLock';
import keyShift from './strings/keyShift';
import keySpace from './strings/keySpace';
import keyTab from './strings/keyTab';

// boolean
import isMobile from './boolean/isMobile';
import isApple from './boolean/isApple';
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
import Data, { getInstance } from './misc/data';
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
  mouseclickEvent,
  mousedownEvent,
  mouseupEvent,
  mouseHoverEvents,
  mouseenterEvent,
  mouseleaveEvent,
  touchEvents,
  touchstartEvent,
  touchmoveEvent,
  touchcancelEvent,
  touchendEvent,
  focusEvents,
  focusinEvent,
  focusoutEvent,
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
  isApple,
  support3DTransform,
  supportPassive,
  supportTransform,
  supportTouch,
  supportAnimation,
  supportTransition,
  addEventListener,
  removeEventListener,
  keyboardEventKeys,
  keyAlt,
  keyArrowDown,
  keyArrowLeft,
  keyArrowRight,
  keyArrowUp,
  keyBackspace,
  keyCapsLock,
  keyControl,
  keyDelete,
  keyEnter,
  keyInsert,
  keyMeta,
  keyPause,
  keyScrollLock,
  keyShift,
  keySpace,
  keyTab,
  addClass,
  removeClass,
  hasClass,
  on,
  off,
  one,
  Data,
  getInstance,
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

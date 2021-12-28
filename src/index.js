// strings
import ariaChecked from './strings/ariaChecked';
import ariaDescribedBy from './strings/ariaDescribedBy';
import ariaExpanded from './strings/ariaExpanded';
import ariaHidden from './strings/ariaHidden';
import ariaLabel from './strings/ariaLabel';
import ariaLabelledBy from './strings/ariaLabelledBy';
import ariaModal from './strings/ariaModal';
import ariaPressed from './strings/ariaPressed';
import ariaSelected from './strings/ariaSelected';

import nativeEvents from './strings/nativeEvents';
import abortEvent from './strings/abortEvent';
import blurEvent from './strings/blurEvent';
import moveEvent from './strings/moveEvent';
import changeEvent from './strings/changeEvent';
import errorEvent from './strings/errorEvent';
import resetEvent from './strings/resetEvent';
import resizeEvent from './strings/resizeEvent';
import scrollEvent from './strings/scrollEvent';
import submitEvent from './strings/submitEvent';
import loadEvent from './strings/loadEvent';
import unloadEvent from './strings/unloadEvent';
import readystatechangeEvent from './strings/readystatechangeEvent';
import beforeunloadEvent from './strings/beforeunloadEvent';
import orientationchangeEvent from './strings/orientationchangeEvent';
import contextmenuEvent from './strings/contextmenuEvent';
import DOMContentLoadedEvent from './strings/DOMContentLoadedEvent';
import DOMMouseScrollEvent from './strings/DOMMouseScrollEvent';

import selectEvent from './strings/selectEvent';
import selectendEvent from './strings/selectendEvent';
import selectstartEvent from './strings/selectstartEvent';

import mouseSwipeEvents from './strings/mouseSwipeEvents';
import mouseClickEvents from './strings/mouseClickEvents';
import mouseclickEvent from './strings/mouseclickEvent';
import mousedblclickEvent from './strings/mousedblclickEvent';
import mousedownEvent from './strings/mousedownEvent';
import mouseupEvent from './strings/mouseupEvent';
import mousehoverEvent from './strings/mousehoverEvent';
import mouseHoverEvents from './strings/mouseHoverEvents';
import mouseenterEvent from './strings/mouseenterEvent';
import mouseleaveEvent from './strings/mouseleaveEvent';
import mouseinEvent from './strings/mouseinEvent';
import mouseoutEvent from './strings/mouseoutEvent';
import mousemoveEvent from './strings/mousemoveEvent';
import mousewheelEvent from './strings/mousewheelEvent';

import touchEvents from './strings/touchEvents';
import touchstartEvent from './strings/touchstartEvent';
import touchmoveEvent from './strings/touchmoveEvent';
import touchcancelEvent from './strings/touchcancelEvent';
import touchendEvent from './strings/touchendEvent';

import pointercancelEvent from './strings/pointercancelEvent';
import pointerdownEvent from './strings/pointerdownEvent';
import pointerleaveEvent from './strings/pointerleaveEvent';
import pointermoveEvent from './strings/pointermoveEvent';
import pointerupEvent from './strings/pointerupEvent';

import focusEvents from './strings/focusEvents';
import focusEvent from './strings/focusEvent';
import focusinEvent from './strings/focusinEvent';
import focusoutEvent from './strings/focusoutEvent';

import gesturechangeEvent from './strings/gesturechangeEvent';
import gestureendEvent from './strings/gestureendEvent';
import gesturestartEvent from './strings/gesturestartEvent';

import keyboardEventKeys from './strings/keyboardEventKeys';
import keydownEvent from './strings/keydownEvent';
import keyupEvent from './strings/keyupEvent';
import keypressEvent from './strings/keypressEvent';
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
import keyEscape from './strings/keyEscape';
import keyInsert from './strings/keyInsert';
import keyMeta from './strings/keyMeta';
import keyPause from './strings/keyPause';
import keyScrollLock from './strings/keyScrollLock';
import keyShift from './strings/keyShift';
import keySpace from './strings/keySpace';
import keyTab from './strings/keyTab';

import animationDuration from './strings/animationDuration';
import animationDelay from './strings/animationDelay';
import animationName from './strings/animationName';
import animationEndEvent from './strings/animationEndEvent';
import transitionDuration from './strings/transitionDuration';
import transitionDelay from './strings/transitionDelay';
import transitionEndEvent from './strings/transitionEndEvent';
import transitionProperty from './strings/transitionProperty';
import addEventListener from './strings/addEventListener';
import removeEventListener from './strings/removeEventListener';

import bezierEasings from './strings/bezierEasings';

import offsetHeight from './strings/offsetHeight';
import offsetWidth from './strings/offsetWidth';
import scrollHeight from './strings/scrollHeight';
import scrollWidth from './strings/scrollWidth';

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
import Timer from './misc/timer';
import Data, { getInstance } from './misc/data';
import emulateAnimationEnd from './misc/emulateAnimationEnd';
import emulateTransitionEnd from './misc/emulateTransitionEnd';
import isElementInScrollRange from './misc/isElementInScrollRange';
import isElementInViewport from './misc/isElementInViewport';
import isMedia from './misc/isMedia';
import isRTL from './misc/isRTL';
import passiveHandler from './misc/passiveHandler';
import getElementAnimationDuration from './misc/getElementAnimationDuration';
import getElementAnimationDelay from './misc/getElementAnimationDelay';
import getElementTransitionDuration from './misc/getElementTransitionDuration';
import getElementTransitionDelay from './misc/getElementTransitionDelay';
import normalizeValue from './misc/normalizeValue';
import normalizeOptions from './misc/normalizeOptions';
import tryWrapper from './misc/tryWrapper';
import reflow from './misc/reflow';

import ArrayFrom from './misc/ArrayFrom';
import Float32ArrayFrom from './misc/Float32ArrayFrom';
import Float64ArrayFrom from './misc/Float64ArrayFrom';
import ObjectAssign from './misc/ObjectAssign';
import ObjectKeys from './misc/ObjectKeys';
import ObjectValues from './misc/ObjectValues';
import getElementStyle from './misc/getElementStyle';

import getAttribute from './misc/getAttribute';
import setAttribute from './misc/setAttribute';
import removeAttribute from './misc/removeAttribute';

import isArray from './misc/isArray';
import isElement from './misc/isElement';
import isHTMLElement from './misc/isHTMLElement';
import isHTMLCollection from './misc/isHTMLCollection';
import isNodeList from './misc/isNodeList';
import isElementsArray from './misc/isElementsArray';

import queryElement from './misc/queryElement';
import querySelector from './misc/querySelector';
import querySelectorAll from './misc/querySelectorAll';
import getElementsByTagName from './misc/getElementsByTagName';
import getElementsByClassName from './misc/getElementsByClassName';

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
  nativeEvents,
  abortEvent,
  blurEvent,
  moveEvent,
  changeEvent,
  errorEvent,
  resetEvent,
  resizeEvent,
  scrollEvent,
  submitEvent,
  loadEvent,
  unloadEvent,
  readystatechangeEvent,
  beforeunloadEvent,
  orientationchangeEvent,
  contextmenuEvent,
  DOMContentLoadedEvent,
  DOMMouseScrollEvent,
  selectEvent,
  selectendEvent,
  selectstartEvent,
  mouseClickEvents,
  mouseclickEvent,
  mousedblclickEvent,
  mousedownEvent,
  mouseupEvent,
  mousehoverEvent,
  mouseHoverEvents,
  mouseenterEvent,
  mouseleaveEvent,
  mouseinEvent,
  mouseoutEvent,
  mousemoveEvent,
  mousewheelEvent,
  mouseSwipeEvents,
  touchEvents,
  touchstartEvent,
  touchmoveEvent,
  touchcancelEvent,
  touchendEvent,
  pointercancelEvent,
  pointerdownEvent,
  pointerleaveEvent,
  pointermoveEvent,
  pointerupEvent,
  focusEvents,
  focusEvent,
  focusinEvent,
  focusoutEvent,
  gesturechangeEvent,
  gestureendEvent,
  gesturestartEvent,
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
  keydownEvent,
  keypressEvent,
  keyupEvent,
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
  keyEscape,
  keyInsert,
  keyMeta,
  keyPause,
  keyScrollLock,
  keyShift,
  keySpace,
  keyTab,
  offsetHeight,
  offsetWidth,
  scrollHeight,
  scrollWidth,
  addClass,
  removeClass,
  hasClass,
  on,
  off,
  one,
  Data,
  Timer,
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
  isArray,
  isElement,
  isHTMLElement,
  isNodeList,
  isHTMLCollection,
  isElementsArray,
  isMedia,
  isRTL,
  queryElement,
  querySelector,
  querySelectorAll,
  getElementsByClassName,
  getElementsByTagName,
  normalizeValue,
  normalizeOptions,
  tryWrapper,
  reflow,
  ArrayFrom,
  Float32ArrayFrom,
  Float64ArrayFrom,
  ObjectAssign,
  ObjectKeys,
  ObjectValues,
  getElementStyle,
  getAttribute,
  setAttribute,
  removeAttribute,
  Version,
};

export default SHORTER;

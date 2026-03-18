import { version } from "../package.json";

// strings
import ariaChecked from "./strings/ariaChecked.ts";
import ariaDescription from "./strings/ariaDescription.ts";
import ariaDescribedBy from "./strings/ariaDescribedBy.ts";
import ariaExpanded from "./strings/ariaExpanded.ts";
import ariaHasPopup from "./strings/ariaHasPopup.ts";
import ariaHidden from "./strings/ariaHidden.ts";
import ariaLabel from "./strings/ariaLabel.ts";
import ariaLabelledBy from "./strings/ariaLabelledBy.ts";
import ariaModal from "./strings/ariaModal.ts";
import ariaPressed from "./strings/ariaPressed.ts";
import ariaSelected from "./strings/ariaSelected.ts";
import ariaValueMin from "./strings/ariaValueMin.ts";
import ariaValueMax from "./strings/ariaValueMax.ts";
import ariaValueNow from "./strings/ariaValueNow.ts";
import ariaValueText from "./strings/ariaValueText.ts";

import nativeEvents from "./strings/nativeEvents.ts";
import abortEvent from "./strings/abortEvent.ts";
import blurEvent from "./strings/blurEvent.ts";
import moveEvent from "./strings/moveEvent.ts";
import changeEvent from "./strings/changeEvent.ts";
import dragEvent from "./strings/dragEvent.ts";
import dragstartEvent from "./strings/dragstartEvent.ts";
import dragenterEvent from "./strings/dragenterEvent.ts";
import dragleaveEvent from "./strings/dragleaveEvent.ts";
import dragoverEvent from "./strings/dragoverEvent.ts";
import dragendEvent from "./strings/dragendEvent.ts";
import errorEvent from "./strings/errorEvent.ts";
import resetEvent from "./strings/resetEvent.ts";
import resizeEvent from "./strings/resizeEvent.ts";
import scrollEvent from "./strings/scrollEvent.ts";
import submitEvent from "./strings/submitEvent.ts";
import loadEvent from "./strings/loadEvent.ts";
import loadstartEvent from "./strings/loadstartEvent.ts";
import unloadEvent from "./strings/unloadEvent.ts";
import readystatechangeEvent from "./strings/readystatechangeEvent.ts";
import beforeunloadEvent from "./strings/beforeunloadEvent.ts";
import orientationchangeEvent from "./strings/orientationchangeEvent.ts";
import contextmenuEvent from "./strings/contextmenuEvent.ts";
import DOMContentLoadedEvent from "./strings/DOMContentLoadedEvent.ts";
import DOMMouseScrollEvent from "./strings/DOMMouseScrollEvent.ts";

import selectEvent from "./strings/selectEvent.ts";
import selectendEvent from "./strings/selectendEvent.ts";
import selectstartEvent from "./strings/selectstartEvent.ts";

import mouseSwipeEvents from "./strings/mouseSwipeEvents.ts";
import mouseClickEvents from "./strings/mouseClickEvents.ts";
import mouseclickEvent from "./strings/mouseclickEvent.ts";
import mousedblclickEvent from "./strings/mousedblclickEvent.ts";
import mousedownEvent from "./strings/mousedownEvent.ts";
import mouseupEvent from "./strings/mouseupEvent.ts";
import mousehoverEvent from "./strings/mousehoverEvent.ts";
import mouseHoverEvents from "./strings/mouseHoverEvents.ts";
import mouseenterEvent from "./strings/mouseenterEvent.ts";
import mouseleaveEvent from "./strings/mouseleaveEvent.ts";
import mouseinEvent from "./strings/mouseinEvent.ts";
import mouseoutEvent from "./strings/mouseoutEvent.ts";
import mouseoverEvent from "./strings/mouseoverEvent.ts";
import mousemoveEvent from "./strings/mousemoveEvent.ts";
import mousewheelEvent from "./strings/mousewheelEvent.ts";

import touchEvents from "./strings/touchEvents.ts";
import touchstartEvent from "./strings/touchstartEvent.ts";
import touchmoveEvent from "./strings/touchmoveEvent.ts";
import touchcancelEvent from "./strings/touchcancelEvent.ts";
import touchendEvent from "./strings/touchendEvent.ts";

import pointercancelEvent from "./strings/pointercancelEvent.ts";
import pointerdownEvent from "./strings/pointerdownEvent.ts";
import pointerleaveEvent from "./strings/pointerleaveEvent.ts";
import pointermoveEvent from "./strings/pointermoveEvent.ts";
import pointerupEvent from "./strings/pointerupEvent.ts";

import focusEvents from "./strings/focusEvents.ts";
import focusEvent from "./strings/focusEvent.ts";
import focusinEvent from "./strings/focusinEvent.ts";
import focusoutEvent from "./strings/focusoutEvent.ts";
import focusableSelector from "./strings/focusableSelector.ts";

import gesturechangeEvent from "./strings/gesturechangeEvent.ts";
import gestureendEvent from "./strings/gestureendEvent.ts";
import gesturestartEvent from "./strings/gesturestartEvent.ts";

import keyboardEventKeys from "./strings/keyboardEventKeys.ts";
import keydownEvent from "./strings/keydownEvent.ts";
import keyupEvent from "./strings/keyupEvent.ts";
import keypressEvent from "./strings/keypressEvent.ts";
import keyAlt from "./strings/keyAlt.ts";
import keyArrowDown from "./strings/keyArrowDown.ts";
import keyArrowUp from "./strings/keyArrowUp.ts";
import keyArrowLeft from "./strings/keyArrowLeft.ts";
import keyArrowRight from "./strings/keyArrowRight.ts";
import keyBackspace from "./strings/keyBackspace.ts";
import keyCapsLock from "./strings/keyCapsLock.ts";
import keyControl from "./strings/keyControl.ts";
import keyDelete from "./strings/keyDelete.ts";
import keyEnter from "./strings/keyEnter.ts";
import keyNumpadEnter from "./strings/keyNumpadEnter.ts";
import keyEscape from "./strings/keyEscape.ts";
import keyInsert from "./strings/keyInsert.ts";
import keyMeta from "./strings/keyMeta.ts";
import keyPause from "./strings/keyPause.ts";
import keyScrollLock from "./strings/keyScrollLock.ts";
import keyShift from "./strings/keyShift.ts";
import keySpace from "./strings/keySpace.ts";
import keyTab from "./strings/keyTab.ts";

import animationDuration from "./strings/animationDuration.ts";
import animationDelay from "./strings/animationDelay.ts";
import animationName from "./strings/animationName.ts";
import animationEndEvent from "./strings/animationEndEvent.ts";
import transitionDuration from "./strings/transitionDuration.ts";
import transitionDelay from "./strings/transitionDelay.ts";
import transitionEndEvent from "./strings/transitionEndEvent.ts";
import transitionProperty from "./strings/transitionProperty.ts";

import addEventListener from "./strings/addEventListener.ts";
import removeEventListener from "./strings/removeEventListener.ts";
import bezierEasings from "./strings/bezierEasings.ts";

import offsetHeight from "./strings/offsetHeight.ts";
import offsetWidth from "./strings/offsetWidth.ts";
import scrollHeight from "./strings/scrollHeight.ts";
import scrollWidth from "./strings/scrollWidth.ts";
import tabindex from "./strings/tabindex.ts";

import userAgentData from "./strings/userAgentData.ts";
import userAgent from "./strings/userAgent.ts";

// boolean
import isMobile from "./boolean/isMobile.ts";
import isApple from "./boolean/isApple.ts";
import isFirefox from "./boolean/isFirefox.ts";
import isWebKit from "./boolean/isWebKit.ts";
import support3DTransform from "./boolean/support3DTransform.ts";
import supportPassive from "./boolean/supportPassive.ts";
import supportTransform from "./boolean/supportTransform.ts";
import supportTouch from "./boolean/supportTouch.ts";
import supportAnimation from "./boolean/supportAnimation.ts";
import supportTransition from "./boolean/supportTransition.ts";

// attributes
import getAttribute from "./attr/getAttribute.ts";
import getAttributeNS from "./attr/getAttributeNS.ts";
import hasAttribute from "./attr/hasAttribute.ts";
import hasAttributeNS from "./attr/hasAttributeNS.ts";
import setAttribute from "./attr/setAttribute.ts";
import setAttributeNS from "./attr/setAttributeNS.ts";
import removeAttribute from "./attr/removeAttribute.ts";
import removeAttributeNS from "./attr/removeAttributeNS.ts";

// class
import addClass from "./class/addClass.ts";
import removeClass from "./class/removeClass.ts";
import hasClass from "./class/hasClass.ts";

// event
import on from "./event/on.ts";
import off from "./event/off.ts";
import one from "./event/one.ts";

// blocks
import documentBody from "./blocks/documentBody.ts";
import documentElement from "./blocks/documentElement.ts";
import documentHead from "./blocks/documentHead.ts";

// misc
import ArrayFrom from "./misc/ArrayFrom.ts";
import Data from "./misc/data.ts";
import getInstance from "./misc/getInstance.ts";
import capitalize from "./misc/capitalize.ts";
import camelCase from "./misc/camelCase.ts";
import createElement from "./misc/createElement.ts";
import createElementNS from "./misc/createElementNS.ts";
import dispatchEvent from "./misc/dispatchEvent.ts";
import distinct from "./misc/distinct.ts";
import emulateAnimationEnd from "./misc/emulateAnimationEnd.ts";
import emulateTransitionEnd from "./misc/emulateTransitionEnd.ts";
import Float32ArrayFrom from "./misc/Float32ArrayFrom.ts";
import Float64ArrayFrom from "./misc/Float64ArrayFrom.ts";
import focus from "./misc/focus.ts";
import kebabCase from "./misc/kebabCase.ts";
import noop from "./misc/noop.ts";
import normalizeOptions from "./misc/normalizeOptions.ts";
import normalizeValue from "./misc/normalizeValue.ts";
import ObjectAssign from "./misc/ObjectAssign.ts";
import ObjectEntries from "./misc/ObjectEntries.ts";
import ObjectHasOwn from "./misc/ObjectHasOwn.ts";
import ObjectKeys from "./misc/ObjectKeys.ts";
import ObjectValues from "./misc/ObjectValues.ts";
import ObjectFromEntries from "./misc/ObjectFromEntries.ts";
import createCustomEvent from "./misc/createCustomEvent.ts";
import passiveHandler from "./misc/passiveHandler.ts";
import reflow from "./misc/reflow.ts";
import setElementStyle from "./misc/setElementStyle.ts";
import Timer from "./misc/timer.ts";
import toLowerCase from "./misc/toLowerCase.ts";
import toUpperCase from "./misc/toUpperCase.ts";
import {
  addFocusTrap,
  handleKeyboardNavigation,
  hasFocusTrap,
  removeFocusTrap,
  toggleFocusTrap,
} from "./misc/focusTrap.ts";

// get
import getBoundingClientRect from "./get/getBoundingClientRect.ts";
import getDocument from "./get/getDocument.ts";
import getDocumentBody from "./get/getDocumentBody.ts";
import getDocumentElement from "./get/getDocumentElement.ts";
import getDocumentHead from "./get/getDocumentHead.ts";
import getElementAnimationDuration from "./get/getElementAnimationDuration.ts";
import getElementAnimationDelay from "./get/getElementAnimationDelay.ts";
import getElementStyle from "./get/getElementStyle.ts";
import getElementTransitionDuration from "./get/getElementTransitionDuration.ts";
import getElementTransitionDelay from "./get/getElementTransitionDelay.ts";
import getNodeName from "./get/getNodeName.ts";
import getNodeScroll from "./get/getNodeScroll.ts";
import getOffsetParent from "./get/getOffsetParent.ts";
import getParentNode from "./get/getParentNode.ts";
import getRectRelativeToOffsetParent from "./get/getRectRelativeToOffsetParent.ts";
import getUID from "./get/getUID.ts";
import getWindow from "./get/getWindow.ts";

// is
import isArray from "./is/isArray.ts";
import isCanvas from "./is/isCanvas.ts";
import isDocument from "./is/isDocument.ts";
import isCustomElement from "./is/isCustomElement.ts";
import isElement from "./is/isElement.ts";
import isElementInScrollRange from "./is/isElementInScrollRange.ts";
import isElementInViewport from "./is/isElementInViewport.ts";
import isElementsArray from "./is/isElementsArray.ts";
import isFunction from "./is/isFunction.ts";
import isObject from "./is/isObject.ts";
import isHTMLCollection from "./is/isHTMLCollection.ts";
import isHTMLElement from "./is/isHTMLElement.ts";
import isHTMLImageElement from "./is/isHTMLImageElement.ts";
import isJSON from "./is/isJSON.ts";
import isMap from "./is/isMap.ts";
import isWeakMap from "./is/isWeakMap.ts";
import isMedia from "./is/isMedia.ts";
import isNode from "./is/isNode.ts";
import isNodeList from "./is/isNodeList.ts";
import isNumber from "./is/isNumber.ts";
import isRTL from "./is/isRTL.ts";
import isScaledElement from "./is/isScaledElement.ts";
import isShadowRoot from "./is/isShadowRoot.ts";
import isString from "./is/isString.ts";
import isSVGElement from "./is/isSVGElement.ts";
import isTableElement from "./is/isTableElement.ts";
import isWindow from "./is/isWindow.ts";

// selectors
import closest from "./selectors/closest.ts";
import querySelector from "./selectors/querySelector.ts";
import getCustomElements from "./selectors/getCustomElements.ts";
import getElementById from "./selectors/getElementById.ts";
import querySelectorAll from "./selectors/querySelectorAll.ts";
import getElementsByTagName from "./selectors/getElementsByTagName.ts";
import getElementsByClassName from "./selectors/getElementsByClassName.ts";
import matches from "./selectors/matches.ts";

export {
  // strings
  abortEvent,
  // class
  addClass,
  addEventListener,
  addFocusTrap,
  animationDelay,
  animationDuration,
  animationEndEvent,
  animationName,
  ariaChecked,
  ariaDescribedBy,
  ariaDescription,
  ariaExpanded,
  ariaHasPopup,
  ariaHidden,
  ariaLabel,
  ariaLabelledBy,
  ariaModal,
  ariaPressed,
  ariaSelected,
  ariaValueMax,
  ariaValueMin,
  ariaValueNow,
  ariaValueText,
  ArrayFrom,
  beforeunloadEvent,
  bezierEasings,
  blurEvent,
  camelCase,
  capitalize,
  changeEvent,
  closest,
  contextmenuEvent,
  createCustomEvent,
  createElement,
  createElementNS,
  Data,
  dispatchEvent,
  distinct,
  documentBody,
  documentElement,
  documentHead,
  DOMContentLoadedEvent,
  DOMMouseScrollEvent,
  dragendEvent,
  dragenterEvent,
  dragEvent,
  dragleaveEvent,
  dragoverEvent,
  dragstartEvent,
  emulateAnimationEnd,
  emulateTransitionEnd,
  errorEvent,
  Float32ArrayFrom,
  Float64ArrayFrom,
  focus,
  focusableSelector,
  focusEvent,
  focusEvents,
  focusinEvent,
  focusoutEvent,
  gesturechangeEvent,
  gestureendEvent,
  gesturestartEvent,
  getAttribute,
  getAttributeNS,
  getBoundingClientRect,
  getCustomElements,
  getDocument,
  getDocumentBody,
  getDocumentElement,
  getDocumentHead,
  getElementAnimationDelay,
  getElementAnimationDuration,
  getElementById,
  getElementsByClassName,
  getElementsByTagName,
  getElementStyle,
  getElementTransitionDelay,
  getElementTransitionDuration,
  getInstance,
  getNodeName,
  getNodeScroll,
  getOffsetParent,
  getParentNode,
  getRectRelativeToOffsetParent,
  getUID,
  getWindow,
  handleKeyboardNavigation,
  hasAttribute,
  hasAttributeNS,
  hasClass,
  hasFocusTrap,
  isApple,
  isArray,
  isCanvas,
  isCustomElement,
  isDocument,
  isElement,
  isElementInScrollRange,
  isElementInViewport,
  isElementsArray,
  isFirefox,
  isFunction,
  isHTMLCollection,
  isHTMLElement,
  isHTMLImageElement,
  isJSON,
  isMap,
  isMedia,
  isMobile,
  isNode,
  isNodeList,
  isNumber,
  isObject,
  isRTL,
  isScaledElement,
  isShadowRoot,
  isString,
  isSVGElement,
  isTableElement,
  isWeakMap,
  isWebKit,
  isWindow,
  kebabCase,
  keyAlt,
  keyArrowDown,
  keyArrowLeft,
  keyArrowRight,
  keyArrowUp,
  keyBackspace,
  keyboardEventKeys,
  keyCapsLock,
  keyControl,
  keyDelete,
  keydownEvent,
  keyEnter,
  keyEscape,
  keyInsert,
  keyMeta,
  keyNumpadEnter,
  keyPause,
  keypressEvent,
  keyScrollLock,
  keyShift,
  keySpace,
  keyTab,
  keyupEvent,
  loadEvent,
  loadstartEvent,
  matches,
  mouseclickEvent,
  mouseClickEvents,
  mousedblclickEvent,
  mousedownEvent,
  mouseenterEvent,
  mousehoverEvent,
  mouseHoverEvents,
  mouseinEvent,
  mouseleaveEvent,
  mousemoveEvent,
  mouseoutEvent,
  mouseoverEvent,
  mouseSwipeEvents,
  mouseupEvent,
  mousewheelEvent,
  moveEvent,
  nativeEvents,
  noop,
  normalizeOptions,
  normalizeValue,
  ObjectAssign,
  ObjectEntries,
  ObjectFromEntries,
  ObjectHasOwn,
  ObjectKeys,
  ObjectValues,
  off,
  offsetHeight,
  offsetWidth,
  on,
  one,
  orientationchangeEvent,
  passiveHandler,
  pointercancelEvent,
  pointerdownEvent,
  pointerleaveEvent,
  pointermoveEvent,
  pointerupEvent,
  querySelector,
  querySelectorAll,
  readystatechangeEvent,
  reflow,
  removeAttribute,
  removeAttributeNS,
  removeClass,
  removeEventListener,
  removeFocusTrap,
  resetEvent,
  resizeEvent,
  scrollEvent,
  scrollHeight,
  scrollWidth,
  selectendEvent,
  selectEvent,
  selectstartEvent,
  setAttribute,
  setAttributeNS,
  setElementStyle,
  submitEvent,
  support3DTransform,
  supportAnimation,
  supportPassive,
  supportTouch,
  supportTransform,
  supportTransition,
  tabindex,
  Timer,
  toggleFocusTrap,
  toLowerCase,
  touchcancelEvent,
  touchendEvent,
  touchEvents,
  touchmoveEvent,
  touchstartEvent,
  toUpperCase,
  transitionDelay,
  transitionDuration,
  transitionEndEvent,
  transitionProperty,
  unloadEvent,
  userAgent,
  userAgentData,
  version,
  // types
  // type AnimationEvent,
  // type AnimationEventHandler,
  // type BoundingClientRect,
  // type ChangeEvent,
  // type ChangeEventHandler,
  // type ClipboardEvent,
  // type ClipboardEventHandler,
  // type CompositionEvent,
  // type CompositionEventHandler,
  // type CSS4Declaration,
  // type CustomElement,
  // type DragEvent,
  // type DragEventHandler,
  // type FocusableElement,
  // type FocusEvent,
  // type FocusEventHandler,
  // type FormEvent,
  // type FormEventHandler,
  // type KeyboardEvent,
  // type KeyboardEventHandler,
  // type MouseEvent,
  // type MouseEventHandler,
  // type NativeEvent,
  // type NativeEventHandler,
  // type NavigatorUA,
  // type NavigatorUABrand,
  // type NavigatorUAData,
  // type OffsetRect,
  // type OriginalEvent,
  // type PointerEvent,
  // type PointerEventHandler,
  // type PossibleEventTarget,
  // type TouchEvent,
  // type TouchEventHandler,
  // type TransitionEvent,
  // type TransitionEventHandler,
  // type UIEvent,
  // type UIEventHandler,
  // type WheelEvent,
  // type WheelEventHandler,
};

export type { FocusableElement } from "./misc/focusTrap.ts";
export type {
  NavigatorUA,
  NavigatorUABrand,
  NavigatorUAData,
} from "./interface/navigatorUA.d.ts";
export type { OffsetRect } from "./interface/offsetRect.d.ts";
export type { OriginalEvent } from "./interface/originalEvent.d.ts";
export type { BoundingClientRect } from "./interface/boundingClientRect.d.ts";
export type { CustomElement } from "./interface/customElement.d.ts";
export type { CSS4Declaration } from "./interface/css4Declaration.d.ts";
export type {
  AnimationEvent,
  AnimationEventHandler,
  ChangeEvent,
  ChangeEventHandler,
  ClipboardEvent,
  ClipboardEventHandler,
  CompositionEvent,
  CompositionEventHandler,
  DragEvent,
  DragEventHandler,
  FocusEvent,
  FocusEventHandler,
  FormEvent,
  FormEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  NativeEvent,
  NativeEventHandler,
  PointerEvent,
  PointerEventHandler,
  PossibleEventTarget,
  TouchEvent,
  TouchEventHandler,
  TransitionEvent,
  TransitionEventHandler,
  UIEvent,
  UIEventHandler,
  WheelEvent,
  WheelEventHandler,
} from "./interface/event.d.ts";

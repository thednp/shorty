export as namespace SHORTER;

import './shorter';
export { default as mouseClickEvents } from "shorter-js/src/strings/mouseClickEvents";
export { default as mouseHoverEvents } from "shorter-js/src/strings/mouseHoverEvents";
export { default as touchEvents } from "shorter-js/src/strings/touchEvents";
export { default as focusEvents } from "shorter-js/src/strings/focusEvents";
export { default as mouseSwipeEvents } from "shorter-js/src/strings/mouseSwipeEvents";
export { default as bezierEasings } from "shorter-js/src/strings/bezierEasings";
export { default as animationDuration } from "shorter-js/src/strings/animationDuration";
export { default as animationDelay } from "shorter-js/src/strings/animationDelay";
export { default as animationName } from "shorter-js/src/strings/animationName";
export { default as animationEndEvent } from "shorter-js/src/strings/animationEndEvent";
export { default as transitionDuration } from "shorter-js/src/strings/transitionDuration";
export { default as transitionDelay } from "shorter-js/src/strings/transitionDelay";
export { default as transitionEndEvent } from "shorter-js/src/strings/transitionEndEvent";
export { default as transitionProperty } from "shorter-js/src/strings/transitionProperty";
export { default as isMobile } from "shorter-js/src/boolean/isMobile";
export { default as support3DTransform } from "shorter-js/src/boolean/support3DTransform";
export { default as supportPassive } from "shorter-js/src/boolean/supportPassive";
export { default as supportTransform } from "shorter-js/src/boolean/supportTransform";
export { default as supportTouch } from "shorter-js/src/boolean/supportTouch";
export { default as supportAnimation } from "shorter-js/src/boolean/supportAnimation";
export { default as supportTransition } from "shorter-js/src/boolean/supportTransition";
export { default as addEventListener } from "shorter-js/src/strings/addEventListener";
export { default as removeEventListener } from "shorter-js/src/strings/removeEventListener";
export { default as addClass } from "shorter-js/src/class/addClass";
export { default as removeClass } from "shorter-js/src/class/removeClass";
export { default as hasClass } from "shorter-js/src/class/hasClass";
export { default as on } from "shorter-js/src/event/on";
export { default as off } from "shorter-js/src/event/off";
export { default as one } from "shorter-js/src/event/one";
export { default as Data, getInstance } from "shorter-js/src/misc/data";
export { default as emulateAnimationEnd } from "shorter-js/src/misc/emulateAnimationEnd";
export { default as emulateTransitionEnd } from "shorter-js/src/misc/emulateTransitionEnd";
export { default as isElementInScrollRange } from "shorter-js/src/misc/isElementInScrollRange";
export { default as isElementInViewport } from "shorter-js/src/misc/isElementInViewport";
export { default as isRTL } from "shorter-js/src/misc/isRTL";
export { default as passiveHandler } from "shorter-js/src/misc/passiveHandler";
export { default as getElementAnimationDuration } from "shorter-js/src/misc/getElementAnimationDuration";
export { default as getElementAnimationDelay } from "shorter-js/src/misc/getElementAnimationDelay";
export { default as getElementTransitionDuration } from "shorter-js/src/misc/getElementTransitionDuration";
export { default as getElementTransitionDelay } from "shorter-js/src/misc/getElementTransitionDelay";
export { default as queryElement } from "shorter-js/src/misc/queryElement";
export { default as normalizeValue } from "shorter-js/src/misc/normalizeValue";
export { default as normalizeOptions } from "shorter-js/src/misc/normalizeOptions";
export { default as tryWrapper } from "shorter-js/src/misc/tryWrapper";
export { default as reflow } from "shorter-js/src/misc/reflow";
export { default as Version } from "shorter-js/src/misc/version";

export type Component = {
  element: Element,
  options?: Record<string, any>,
  [x:string]: any
};

export type getInstance<T, C> = (element: Element, component: C) => T | null;

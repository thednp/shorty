import { version } from '../package.json';

/**
 * A global namespace for `abort` event.
 */
export declare const abortEvent = "abort";

declare interface AbstractView {
    styleMedia: StyleMedia;
    document: Document;
}

/**
 * Add one or more CSS classes to `Element.classList`.
 *
 * @param element target
 * @param classNAME to add
 */
export declare const addClass: (element: Element, ...classNAME: string[]) => void;

/**
 * A global namespace for 'addEventListener' string.
 */
declare const addEventListener_2 = "addEventListener";
export { addEventListener_2 as addEventListener }

/**
 * A global namespace for 'animationDelay' string.
 */
export declare const animationDelay = "animationDelay";

/**
 * A global namespace for 'animationDuration' string.
 */
export declare const animationDuration = "animationDuration";

/**
 * A global namespace for 'animationend' string.
 */
export declare const animationEndEvent = "animationend";

declare interface AnimationEvent_2<T extends EventTarget = HTMLElement>
extends NativeEvent<T, NativeAnimationEvent> {
    animationName: string;
    elapsedTime: number;
    pseudoElement: string;
}
export { AnimationEvent_2 as AnimationEvent }

export declare type AnimationEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
T,
AnimationEvent_2<T>
>;

/**
 * A global namespace for 'animationName' string.
 */
export declare const animationName = "animationName";

/**
 * A global namespace for aria-checked.
 */
export declare const ariaChecked = "aria-checked";

/**
 * A global namespace for aria-describedby.
 */
export declare const ariaDescribedBy = "aria-describedby";

/**
 * A global namespace for aria-description.
 */
export declare const ariaDescription = "aria-description";

/**
 * A global namespace for aria-expanded.
 */
export declare const ariaExpanded = "aria-expanded";

/**
 * A global namespace for aria-haspopup.
 */
export declare const ariaHasPopup = "aria-haspopup";

/**
 * A global namespace for aria-hidden.
 */
export declare const ariaHidden = "aria-hidden";

/**
 * A global namespace for aria-label.
 */
export declare const ariaLabel = "aria-label";

/**
 * A global namespace for aria-labelledby.
 */
export declare const ariaLabelledBy = "aria-labelledby";

/**
 * A global namespace for aria-modal.
 */
export declare const ariaModal = "aria-modal";

/**
 * A global namespace for aria-pressed.
 */
export declare const ariaPressed = "aria-pressed";

/**
 * A global namespace for aria-selected.
 */
export declare const ariaSelected = "aria-selected";

/**
 * A global namespace for aria-valuemax.
 */
export declare const ariaValueMax = "aria-valuemax";

/**
 * A global namespace for aria-valuemin.
 */
export declare const ariaValueMin = "aria-valuemin";

/**
 * A global namespace for aria-valuenow.
 */
export declare const ariaValueNow = "aria-valuenow";

/**
 * A global namespace for aria-valuetext.
 */
export declare const ariaValueText = "aria-valuetext";

/**
 * Shortie for `Array.from()` static method.
 * The utility should also work with any typed arrays
 * like Float64Array or Int32Array.
 *
 * @param arr array-like iterable object
 * @returns a new array from iterable object
 */
export declare const ArrayFrom: <T>(arr: ArrayLike<T> | Iterable<T>) => T[];

declare interface BaseEvent<E = Event, C = unknown, T = unknown> {
    nativeEvent: E;
    currentTarget: C | null;
    target: T & EventTarget;
    bubbles: boolean;
    cancelable: boolean;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    preventDefault(): void;
    isDefaultPrevented(): boolean;
    stopPropagation(): void;
    isPropagationStopped(): boolean;
    persist(): void;
    timeStamp: number;
    type: string;
}

/**
 * A global namespace for `beforeunload` event.
 */
export declare const beforeunloadEvent = "beforeunload";

/**
 * A global namespace for predefined
 * CSS3 'cubic-bezier()' easing functions.
 */
export declare const bezierEasings: {
    linear: string;
    easingSinusoidalIn: string;
    easingSinusoidalOut: string;
    easingSinusoidalInOut: string;
    easingQuadraticIn: string;
    easingQuadraticOut: string;
    easingQuadraticInOut: string;
    easingCubicIn: string;
    easingCubicOut: string;
    easingCubicInOut: string;
    easingQuarticIn: string;
    easingQuarticOut: string;
    easingQuarticInOut: string;
    easingQuinticIn: string;
    easingQuinticOut: string;
    easingQuinticInOut: string;
    easingExponentialIn: string;
    easingExponentialOut: string;
    easingExponentialInOut: string;
    easingCircularIn: string;
    easingCircularOut: string;
    easingCircularInOut: string;
    easingBackIn: string;
    easingBackOut: string;
    easingBackInOut: string;
};

/**
 * A global namespace for `blur` event.
 */
export declare const blurEvent = "blur";

export declare interface BoundingClientRect {
    width: number;
    height: number;
    top: number;
    left: number;
    right: number;
    bottom: number;
    x: number;
    y: number;
}

/**
 * Transform a string to camel case.
 * @param input source string
 */
export declare const camelCase: (input: string) => string;

/**
 * Capitalize first character in a string.
 * @param input source string
 */
export declare const capitalize: (input: string) => string;

export declare interface ChangeEvent<T extends EventTarget = FormControl>
extends FormEvent<T> {
    target: EventTarget & T;
}

/**
 * A global namespace for `change` event.
 */
export declare const changeEvent = "change";

export declare type ChangeEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
T,
ChangeEvent<T>
>;

declare interface ClipboardEvent_2<T extends EventTarget = HTMLElement>
extends NativeEvent<T, NativeClipboardEvent> {
    clipboardData: DataTransfer;
}
export { ClipboardEvent_2 as ClipboardEvent }

export declare type ClipboardEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
T,
ClipboardEvent_2<T>
>;

/**
 * Shortcut for `HTMLElement.closest` method which also works
 * with children of `ShadowRoot`. The order of the parameters
 * is intentional since they're both required.
 *
 * @see https://stackoverflow.com/q/54520554/803358
 *
 * @param element target Element to check
 * @param selector the selector string
 * @return the query result
 */
export declare const closest: <T extends Element>(element: T, selector: string) => T | null;

declare interface CompositionEvent_2<T extends EventTarget = HTMLElement>
extends NativeEvent<T, NativeCompositionEvent> {
    data: string;
}
export { CompositionEvent_2 as CompositionEvent }

export declare type CompositionEventHandler<T extends EventTarget = HTMLElement> =
EventHandler<
T,
CompositionEvent_2<T>
>;

/**
 * A global namespace for `contextmenu` event.
 */
export declare const contextmenuEvent = "contextmenu";

/**
 * Returns a namespaced `CustomEvent` specific to each component.
 *
 * @param eventType Event.type
 * @param config Event.options | Event.properties
 * @returns a new namespaced event
 */
export declare const createCustomEvent: <O extends unknown & Record<string, unknown>, T extends OriginalEvent>(eventType: string, config?: O) => T;

/**
 * Shortie for `document.createElement` method
 * which allows you to create a new `HTMLElement` for a given `tagName`
 * or based on an object with specific non-readonly attributes with string values:
 * `id`, `className`, `textContent`, `style`, etc.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 *
 * @param param `tagName` or object
 * @return a new `HTMLElement`
 */
export declare const createElement: <T extends HTMLElement>(param?: string | Partial<T>) => T | undefined;

/**
 * Shortie for `document.createElementNS` method
 * which allows you to create a new `Element` for a given `tagName`
 * or based on an object with specific non-readonly attributes with string values:
 * `id`, `className`, `textContent`, `style`, etc.
 * Note: some elements resulted from this function call may not be compatible with
 * some attributes.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS
 *
 * @param ns `namespaceURI` to associate with the new `Element`
 * @param param `tagName` or object
 * @return a new `Element`
 */
export declare const createElementNS: <T extends Element>(ns: string, param?: string | Partial<T>) => T | undefined;

export declare interface CSS4Declaration
extends Exclude<() => string | symbol, CSSStyleDeclaration> {
    [key: string]: string;
}

export declare interface CustomElement extends HTMLElement {
    shadowRoot: ShadowRoot;
    connectedCallback?: () => void;
    disconnectedCallback?: () => void;
    adoptedCallback?: () => void;
    attributeChangedCallback?: () => void;
    // [key: PropertyKey]: any;
}

/**
 * An interface for web components background data.
 *
 * @see https://github.com/thednp/bootstrap.native/blob/master/src/components/base-component.js
 */
export declare const Data: {
    data: Map<string, Map<Element, unknown>>;
    /**
     * Sets web components data.
     *
     * @param element target element
     * @param component the component's name or a unique key
     * @param instance the component instance
     */
    set: <T>(element: Element, component: string, instance: T) => void;
    /**
     * Returns all instances for specified component.
     *
     * @param component the component's name or a unique key
     * @returns all the component instances
     */
    getAllFor: <T>(component: string) => Map<Element, T> | null;
    /**
     * Returns the instance associated with the target.
     *
     * @param element target element
     * @param component the component's name or a unique key
     * @returns the instance
     */
    get: <T>(element: Element, component: string) => T | null;
    /**
     * Removes web components data.
     *
     * @param element target element
     * @param component the component's name or a unique key
     */
    remove: <T>(element: Element, component: string) => void;
};

/**
 * Shortcut for the `Element.dispatchEvent(Event)` method.
 *
 * @param element is the target
 * @param event is the `Event` object
 */
declare const dispatchEvent_2: (element: EventTarget, event: Event) => boolean;
export { dispatchEvent_2 as dispatchEvent }

/**
 * JavaScript `Array` distinct.
 *
 * @see https://codeburst.io/javascript-array-distinct-5edc93501dc4
 *
 * @example
 * ```
 * [0,1,1,2].filter(distinct)
 * // => [0,1,2]
 * ```
 * @param value array item value
 * @param index array item index
 * @param arr a clone of the target array
 * @returns the query result
 */
export declare const distinct: <T>(value: T, index: number, arr: T[]) => boolean;

/**
 * A global namespace for `document.body`.
 */
export declare const documentBody: HTMLElement;

/**
 * A global namespace for `document.documentElement` or the `<HTML>`.
 */
export declare const documentElement: HTMLElement;

/**
 * A global namespace for `document.head`.
 */
export declare const documentHead: HTMLHeadElement;

/**
 * A global namespace for `DOMContentLoaded` event.
 */
export declare const DOMContentLoadedEvent = "DOMContentLoaded";

/**
 * A global namespace for `DOMMouseScroll` event.
 */
export declare const DOMMouseScrollEvent = "DOMMouseScroll";

/**
 * A global namespace for `dragend` event.
 */
export declare const dragendEvent = "dragend";

/**
 * A global namespace for `dragenter` event.
 */
export declare const dragenterEvent = "dragenter";

/**
 * A global namespace for `drag` event.
 */
export declare const dragEvent = "drag";

declare interface DragEvent_2<T extends EventTarget = HTMLElement>
extends MouseEvent_2<T, NativeDragEvent> {
    dataTransfer: DataTransfer;
}
export { DragEvent_2 as DragEvent }

export declare type DragEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
T,
DragEvent_2<T>
>;

/**
 * A global namespace for `dragleave` event.
 */
export declare const dragleaveEvent = "dragleave";

/**
 * A global namespace for `dragover` event.
 */
export declare const dragoverEvent = "dragover";

/**
 * A global namespace for `dragstart` event.
 */
export declare const dragstartEvent = "dragstart";

/**
 * Utility to make sure callbacks are consistently
 * called when animation ends.
 *
 * @param element target
 * @param handler `animationend` callback
 */
export declare const emulateAnimationEnd: (element: Element, handler: EventListener) => void;

/**
 * Utility to make sure callbacks are consistently
 * called when transition ends.
 *
 * @param element element target
 * @param handler `transitionend` callback
 */
export declare const emulateTransitionEnd: (element: Element, handler: EventListener) => void;

/**
 * A global namespace for `error` event.
 */
export declare const errorEvent = "error";

declare type EventHandler<
T extends EventTarget = HTMLElement,
E = Event | NativeEvent<T>,
> = (event: E) => void;

/**
 * Shortcut for `Float32Array.from()` static method.
 *
 * @param arr array-like iterable object
 * @returns a new Float32Array
 */
export declare const Float32ArrayFrom: (arr: ArrayLike<number> | Iterable<number>) => Float32Array;

/**
 * Shortcut for `Float64Array.from()` static method.
 *
 * @param arr array-like iterable object
 * @returns a new Float64Array
 */
export declare const Float64ArrayFrom: (arr: ArrayLike<number> | Iterable<number>) => Float64Array;

declare type Fn = (...args: unknown[]) => unknown;

/**
 * Shortie for `HTMLOrSVGElement.focus()` method.
 *
 * @param element is the target
 * @param options allows to pass additional options such as `preventScroll: boolean`
 */
declare const focus_2: (element: HTMLOrSVGElement, options?: FocusOptions) => void;
export { focus_2 as focus }

export declare type FocusableElement = HTMLAnchorElement | HTMLButtonElement | HTMLInputElement | HTMLTextAreaElement | HTMLDataListElement | HTMLDetailsElement | HTMLSelectElement;

export declare const focusableSelector = "a[href], button, input, textarea, select, details, [tabindex]:not([tabindex=\"-1\"]";

/**
 * A global namespace for `focus` event.
 */
export declare const focusEvent = "focus";

declare interface FocusEvent_2<
T extends EventTarget = HTMLElement,
R extends Element = HTMLElement,
> extends NativeEvent<T, NativeFocusEvent> {
    relatedTarget: (EventTarget & R) | null;
    target: EventTarget & T;
}
export { FocusEvent_2 as FocusEvent }

export declare type FocusEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
T,
FocusEvent_2<T>
>;

/**
 * A global namespace for focus event names.
 */
export declare const focusEvents: {
    in: string;
    out: string;
};

/**
 * A global namespace for `focusin` event.
 */
export declare const focusinEvent = "focusin";

/**
 * A global namespace for `focusout` event.
 */
export declare const focusoutEvent = "focusout";

declare type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export declare type FormEvent<T extends EventTarget = FormControl> = NativeEvent<T>;

export declare type FormEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
T,
FormEvent<T>
>;

/**
 * A global namespace for `gesturechange` event.
 */
export declare const gesturechangeEvent = "gesturechange";

/**
 * A global namespace for `gestureend` event.
 */
export declare const gestureendEvent = "gestureend";

/**
 * A global namespace for `gesturestart` event.
 */
export declare const gesturestartEvent = "gesturestart";

/**
 * Shortcut for `Element.getAttribute()` method.
 *
 * @param element target element
 * @param att attribute name
 * @returns attribute value
 */
export declare const getAttribute: (element: Element, att: string) => string | null;

/**
 * Shortcut for `Element.getAttributeNS()` method.
 *
 * @param ns attribute namespace
 * @param element target element
 * @param att attribute name
 * @returns attribute value
 */
export declare const getAttributeNS: (ns: string, element: Element, att: string) => string | null;

/**
 * Returns the bounding client rect of a target `Element`.
 *
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param element event.target
 * @param includeScale when *true*, the target scale is also computed
 * @returns the bounding client rect object
 */
export declare const getBoundingClientRect: (element: Element, includeScale?: boolean) => BoundingClientRect;

/**
 * Returns an `Array` of `Node` elements that are registered as
 * `CustomElement`.
 *
 * @see https://stackoverflow.com/questions/27334365/how-to-get-list-of-registered-custom-elements
 *
 * @param parent parent to look into
 * @returns the query result
 */
export declare const getCustomElements: (parent?: ParentNode) => CustomElement[];

/**
 * Returns the `document` or the `#document` element.
 *
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param node the reference node
 * @returns the parent document of the given node
 */
export declare const getDocument: (node?: Node | Document | Window) => Document;

/**
 * Returns the `document.body` or the `<body>` element.
 *
 * @param node the reference node
 * @returns the parent `<body>` of the specified node
 */
export declare const getDocumentBody: (node?: Node | Document | Window) => HTMLElement;

/**
 * Returns the `document.documentElement` or the `<HTML>` element.
 *
 * @param node the reference node
 * @returns the parent `<HTML>` of the node's parent document
 */
export declare const getDocumentElement: (node?: Node | Document | Window) => HTMLElement;

/**
 * Returns the `document.head` or the `<head>` element.
 *
 * @param node the reference node
 * @returns the `<head>` of the node's parent document
 */
export declare const getDocumentHead: (node?: Node | Document | Window) => HTMLHeadElement;

/**
 * Utility to get the computed `animationDelay`
 * from Element in miliseconds.
 *
 * @param element target
 * @return the `animationDelay` value in miliseconds
 */
export declare const getElementAnimationDelay: (element: Element) => number;

/**
 * Utility to get the computed `animationDuration`
 * from `Element` in miliseconds.
 *
 * @param element target
 * @return the `animationDuration` value in miliseconds
 */
export declare const getElementAnimationDuration: (element: Element) => number;

/**
 * Returns an `HTMLElement` that matches the id in the document.
 * Within multiple <iframe> elements, a `parent` parameter
 * would decisively locate the correct element.
 *
 * @param id the ID selector
 * @param context an element in it's document or document
 * @returns the requested element
 */
export declare const getElementById: (id: string, context?: Node) => HTMLElement | null;

/**
 * Shortcut for `Element.getElementsByClassName` method. Some `Node` elements
 * like `ShadowRoot` do not support `getElementsByClassName`.
 *
 * @param selector the class name
 * @param parent optional Element to look into
 * @return the 'HTMLCollection'
 */
export declare const getElementsByClassName: <T extends Element>(selector: string, parent?: ParentNode) => HTMLCollectionOf<T>;

/**
 * Shortcut for `Element.getElementsByTagName` method. Some `Node` elements
 * like `ShadowRoot` do not support `getElementsByTagName`.
 *
 * @param selector the tag name
 * @param parent optional Element to look into
 * @return the 'HTMLCollection'
 */
export declare const getElementsByTagName: <T extends Element>(selector: string, parent?: ParentNode) => HTMLCollectionOf<T>;

/**
 * Shortcut for `window.getComputedStyle(element).propertyName`
 * static method.
 *
 * * If `element` parameter is not an `Element`, `getComputedStyle`
 * throws a `ReferenceError`.
 *
 * @param element target `Element`
 * @param property the css property
 * @param pseudoElt pseudo-elements
 * @return the css property value
 */
export declare const getElementStyle: (element: Element, property: string, pseudoElt?: string | null) => string;

/**
 * Utility to get the computed `transitionDelay`
 * from Element in miliseconds.
 *
 * @param element target
 * @return the `transitionDelay` value in miliseconds
 */
export declare const getElementTransitionDelay: (element: Element) => number;

/**
 * Utility to get the computed `transitionDuration`
 * from Element in miliseconds.
 *
 * @param element target
 * @return the `transitionDuration` value in miliseconds
 */
export declare const getElementTransitionDuration: (element: Element) => number;

/**
 * An alias for `Data.get()`.
 */
export declare const getInstance: <T>(target: Element, component: string) => T | null;

/**
 * Returns the value of `node.nodeName` for the given node.
 * @param node target node
 * @returns the node name
 */
export declare const getNodeName: (node: Node | Window) => string;

/**
 * Returns an `{x, y}` object with the target
 * `Element` / `Node` scroll position.
 *
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param element target node / element
 * @returns the scroll tuple
 */
export declare const getNodeScroll: (element: Element | Window) => {
    x: number;
    y: number;
};

/**
 * Returns the `offsetParent` for a given target.
 *
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param element the target node
 * @returns the offset parent node
 */
export declare const getOffsetParent: (element: Element) => Element | Window;

/**
 * Returns the `parentNode` also going through `ShadowRoot`.
 *
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param node the target node
 * @returns the apropriate parent node
 */
export declare const getParentNode: (node: Node) => ParentNode;

/**
 * Returns the rect relative to a given offset parent and its scroll position.
 *
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param element target
 * @param offsetParent the container / offset parent
 * @param scroll the offsetParent scroll position
 * @returns a DOMRect like object
 */
export declare const getRectRelativeToOffsetParent: (element: Element, offsetParent: Element | Window, scroll: {
    x: number;
    y: number;
}) => OffsetRect;

/**
 * Returns a unique identifier for popover, tooltip, scrollspy.
 *
 * @param element target element
 * @param key optional identifier key
 * @returns an existing or new unique ID
 */
export declare const getUID: (element: Element, key?: string) => number;

/**
 * Returns the `Window` object of a target node.
 *
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param node target node
 * @returns the `Window` object
 */
export declare const getWindow: (node?: Node) => Window;

/**
 * Shortcut for `Element.hasAttribute()` method.
 *
 * @param element target element
 * @param att attribute name
 * @returns the query result
 */
export declare const hasAttribute: (element: Element, att: string) => boolean;

/**
 * Shortcut for `Element.hasAttributeNS()` method.
 *
 * @param ns attribute namespace
 * @param element target element
 * @param att attribute name
 * @returns the query result
 */
export declare const hasAttributeNS: (ns: string, element: Element, att: string) => boolean;

/**
 * Check class in `Element.classList`.
 *
 * @param element target
 * @param classNAME to check
 */
export declare const hasClass: (element: Element, classNAME: string) => boolean;

/**
 * Utility to check if a designated element is affected by focus trap;
 * @param target
 */
export declare const hasFocusTrap: (target: Element) => boolean;

/**
 * An accessor that checks for Apple browsers.
 */
export declare const isApple: () => boolean;

/**
 * Shortie for the `Array.isArray()` static method.
 *
 * @param obj array-like iterable object
 * @returns the query result
 */
export declare const isArray: (obj?: unknown) => obj is unknown[];

/**
 * Checks if an element is an `HTMLCanvasElement` or `<canvas>`.
 *
 * @param element the target element
 * @returns the query result
 */
export declare const isCanvas: (element?: unknown) => element is HTMLCanvasElement;

/**
 * Checks if an object is a `CustomElement`.
 *
 * @param element the target object
 * @returns the query result
 */
export declare const isCustomElement: <T extends CustomElement>(element?: unknown) => element is T;

/**
 * Checks if an object is a `Document`.
 *
 * @see https://dom.spec.whatwg.org/#node
 *
 * @param obj the target object
 * @returns the query result
 */
export declare const isDocument: (obj?: unknown) => obj is Document;

/**
 * Checks if an object is an `Element`.
 *
 * @param element the target object
 * @returns the query result
 */
export declare const isElement: (element?: unknown) => element is Element;

/**
 * Utility to determine if an `Element`
 * is partially visible in viewport.
 *
 * @param element target
 * @return the query result
 */
export declare const isElementInScrollRange: (element?: Element) => boolean;

/**
 * Utility to determine if an `Element`
 * is fully visible in the viewport.
 *
 * @param element target
 * @return the query result
 */
export declare const isElementInViewport: (element?: Element) => boolean;

/**
 * Checks if an object is an `Array` in which all items are `Element`.
 *
 * @param obj the target object
 * @returns the query result
 */
export declare const isElementsArray: (obj?: unknown) => obj is Element[];

/**
 * An accessor that checks for Gecko browsers. When writing this file,
 * Gecko was not supporting `userAgentData`.
 */
export declare const isFirefox: () => boolean;

/**
 * Checks if an object is a `Function`.
 *
 * @param fn the target object
 * @returns the query result
 */
export declare const isFunction: (fn?: unknown) => fn is Fn;

/**
 * Checks if an object is an `HTMLCollection`.
 *
 * @param obj the target object
 * @returns the query result
 */
export declare const isHTMLCollection: (obj?: unknown) => obj is HTMLCollection;

/**
 * Checks if an element is an `HTMLElement`.
 *
 * @see https://dom.spec.whatwg.org/#node
 *
 * @param element the target object
 * @returns the query result
 */
export declare const isHTMLElement: (element?: unknown) => element is HTMLElement;

/**
 * Check if a target element is an `<img>`.
 *
 * @param element the target element
 * @returns the query result
 */
export declare const isHTMLImageElement: (element?: unknown) => element is HTMLImageElement;

/**
 * Checks if a string is a `JSON` string.
 *
 * @param str the target string
 * @returns the query result
 */
export declare const isJSON: (str?: string) => boolean;

/**
 * Checks if an element is a `Map`.
 *
 * @param obj the target object
 * @returns the query result
 */
export declare const isMap: (obj?: unknown) => obj is Map<unknown, unknown>;

/**
 * Checks if an element is an `<svg>` (or any type of SVG element),
 * `<img>`, `<video>` or `<canvas>`.
 *
 * *Tooltip* / *Popover* works different with media elements.
 *
 * @param element the target element
 * @returns the query result
 */
export declare const isMedia: (element?: unknown) => element is SVGElement | HTMLImageElement | HTMLVideoElement | HTMLCanvasElement;

/**
 * An accessor that checks for mobile detection.
 */
export declare const isMobile: () => boolean;

/**
 * Checks if an object is a `Node`.
 *
 * @param node the target object
 * @see https://dom.spec.whatwg.org/#node
 *
 * ```
 * ELEMENT_NODE = 1;
 * ATTRIBUTE_NODE = 2;
 * TEXT_NODE = 3;
 * CDATA_SECTION_NODE = 4;
 * ENTITY_REFERENCE_NODE = 5; // legacy
 * ENTITY_NODE = 6; // legacy
 * PROCESSING_INSTRUCTION_NODE = 7;
 * COMMENT_NODE = 8;
 * DOCUMENT_NODE = 9;
 * DOCUMENT_TYPE_NODE = 10;
 * DOCUMENT_FRAGMENT_NODE = 11;
 * @returns the query result
 */
export declare const isNode: (node?: unknown) => node is Node;

/**
 * Checks if an object is a `NodeList`.
 * => equivalent to `object instanceof NodeList`
 *
 * @param obj the target object
 * @returns the query result
 */
export declare const isNodeList: (obj?: unknown) => obj is NodeList;

/**
 * Shortie for `typeof SOMETHING === "number"`.
 *
 * @param num input value
 * @returns the query result
 */
export declare const isNumber: (num?: unknown) => num is number;

/**
 * Checks if a value is an `Object`.
 *
 * @param obj the target object
 * @returns the query result
 */
export declare const isObject: (obj?: unknown) => obj is object;

/**
 * Checks if a page is Right To Left.
 *
 * @param node the target
 * @returns the query result
 */
export declare const isRTL: (node?: Node) => boolean;

/**
 * Checks if a target `Element` is affected by scale.
 *
 * @see https://github.com/floating-ui/floating-ui
 *
 * @param element target
 * @returns the query result
 */
export declare const isScaledElement: (element?: Element) => boolean;

/**
 * Check if target is a `ShadowRoot`.
 *
 * @param element target
 * @returns the query result
 */
export declare const isShadowRoot: (element?: unknown) => element is ShadowRoot;

/**
 * Shortie for `typeof SOMETHING === "string"`.
 *
 * @param str input value
 * @returns the query result
 */
export declare const isString: (str?: unknown) => str is string;

/**
 * Check if an element is an `<svg>` or any other SVG element,
 * an equivalent to `SOMETHING instanceof SVGElement`.
 *
 * @param element the target element
 * @returns the query result
 */
export declare const isSVGElement: (element?: unknown) => element is SVGElement;

/**
 * Check if a target element is a `<table>`, `<td>` or `<th>`.
 * This specific check is important for determining
 * the `offsetParent` of a given element.
 *
 * @param element the target element
 * @returns the query result
 */
export declare const isTableElement: (element?: unknown) => element is HTMLTableElement | HTMLTableCellElement;

/**
 * Checks if an element is a `WeakMap`.
 *
 * @param obj the target object
 * @returns the query result
 */
export declare const isWeakMap: (obj?: unknown) => obj is WeakMap<WeakKey, unknown>;

export declare const isWebKit: () => boolean;

/**
 * Check if a target object is `Window`.
 * => equivalent to `object instanceof Window`
 *
 * @param obj the target object
 * @returns the query result
 */
export declare const isWindow: (obj?: unknown) => obj is Window;

/**
 * Transform a string to kebab case.
 * @param input source string
 */
export declare const kebabCase: (input: string) => string;

/**
 * A global namespace for `Alt` key.
 * e.which = 18
 */
export declare const keyAlt = "Alt";

/**
 * A global namespace for `ArrowDown` key.
 * e.which = 40 equivalent
 */
export declare const keyArrowDown = "ArrowDown";

/**
 * A global namespace for `ArrowLeft` key.
 * e.which = 37 equivalent
 */
export declare const keyArrowLeft = "ArrowLeft";

/**
 * A global namespace for `ArrowRight` key.
 * e.which = 39 equivalent
 */
export declare const keyArrowRight = "ArrowRight";

/**
 * A global namespace for `ArrowUp` key.
 * e.which = 38 equivalent
 */
export declare const keyArrowUp = "ArrowUp";

/**
 * A global namespace for `Backspace` key.
 * e.which === 8 equivalent
 */
export declare const keyBackspace = "Backspace";

declare interface KeyboardEvent_2<T extends EventTarget = HTMLElement>
extends UIEvent_2<T, NativeKeyboardEvent> {
    altKey: boolean;
    /** @deprecated */
    charCode: number;
    ctrlKey: boolean;
    code: string;
    /**
     * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
     */
    getModifierState(key: ModifierKey): boolean;
    /**
     * See the [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#named-key-attribute-values). for possible values
     */
    key: string;
    /** @deprecated */
    keyCode: number;
    locale: string;
    location: number;
    metaKey: boolean;
    repeat: boolean;
    shiftKey: boolean;
    /** @deprecated */
    which: number;
}
export { KeyboardEvent_2 as KeyboardEvent }

export declare type KeyboardEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
T,
KeyboardEvent_2<T>
>;

/**
 * A global namespace for keyboard event keys.
 */
export declare const keyboardEventKeys: {
    Backspace: string;
    Tab: string;
    Enter: string;
    Shift: string;
    Control: string;
    Alt: string;
    Pause: string;
    CapsLock: string;
    Escape: string;
    Scape: string;
    ArrowLeft: string;
    ArrowUp: string;
    ArrowRight: string;
    ArrowDown: string;
    Insert: string;
    Delete: string;
    Meta: string;
    ContextMenu: string;
    ScrollLock: string;
};

/**
 * A global namespace for `CapsLock` key.
 * e.which = 20 equivalent
 */
export declare const keyCapsLock = "CapsLock";

/**
 * A global namespace for `Control` key.
 * e.which = 17
 */
export declare const keyControl = "Control";

/**
 * A global namespace for `Delete` key.
 * e.which = 46 equivalent
 */
export declare const keyDelete = "Delete";

/**
 * A global namespace for `keydown` event.
 */
export declare const keydownEvent = "keydown";

/**
 * A global namespace for `Enter` key.
 * e.which = 13 equivalent
 */
export declare const keyEnter = "Enter";

/**
 * A global namespace for `Escape` key.
 * e.which = 27 equivalent
 */
export declare const keyEscape = "Escape";

/**
 * A global namespace for `Insert` key.
 * e.which = 45 equivalent
 */
export declare const keyInsert = "Insert";

/**
 * A global namespace for `Meta` key.
 * e.which = 93 equivalent
 */
export declare const keyMeta = "Meta";

/**
 * A global namespace for `Enter` key.
 * e.which = 13 equivalent
 */
export declare const keyNumpadEnter = "NumpadEnter";

/**
 * A global namespace for `Pause` key.
 * e.which = 19
 */
export declare const keyPause = "Pause";

/**
 * A global namespace for `keypress` event.
 */
export declare const keypressEvent = "keypress";

/**
 * A global namespace for `ScrollLock` key.
 * e.which = 145 equivalent
 */
export declare const keyScrollLock = "ScrollLock";

/**
 * A global namespace for `Shift` key.
 * e.which = 16
 */
export declare const keyShift = "Shift";

/**
 * A global namespace for `Space` key.
 * e.which = 32 equivalent
 */
export declare const keySpace = "Space";

/**
 * A global namespace for `Tab` key.
 * e.which = 9 equivalent
 */
export declare const keyTab = "Tab";

/**
 * A global namespace for `keyup` event.
 */
export declare const keyupEvent = "keyup";

/**
 * A global namespace for `load` event.
 */
export declare const loadEvent = "load";

/**
 * A global namespace for `loadstart` event.
 */
export declare const loadstartEvent = "loadstart";

/**
 * Check if element matches a CSS selector.
 *
 * @param target the target element
 * @param selector the selector to match
 * @returns the query result
 */
export declare const matches: (target: Element, selector: string) => boolean;

declare type ModifierKey =
| "Alt"
| "AltGraph"
| "CapsLock"
| "Control"
| "Fn"
| "FnLock"
| "Hyper"
| "Meta"
| "NumLock"
| "ScrollLock"
| "Shift"
| "Super"
| "Symbol"
| "SymbolLock";

/**
 * A global namespace for `click` event.
 */
export declare const mouseclickEvent = "click";

/**
 * A global namespace for mouse click events.
 */
export declare const mouseClickEvents: {
    down: string;
    up: string;
};

/**
 * A global namespace for `dblclick` event.
 */
export declare const mousedblclickEvent = "dblclick";

/**
 * A global namespace for `mousedown` event.
 */
export declare const mousedownEvent = "mousedown";

/**
 * A global namespace for `mouseenter` event.
 */
export declare const mouseenterEvent = "mouseenter";

declare interface MouseEvent_2<T extends EventTarget = HTMLElement, E = NativeMouseEvent>
extends UIEvent_2<T, E> {
    altKey: boolean;
    button: number;
    buttons: number;
    clientX: number;
    clientY: number;
    ctrlKey: boolean;
    /**
     * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
     */
    getModifierState(key: ModifierKey): boolean;
    metaKey: boolean;
    movementX: number;
    movementY: number;
    pageX: number;
    pageY: number;
    relatedTarget: EventTarget | null;
    screenX: number;
    screenY: number;
    shiftKey: boolean;
}
export { MouseEvent_2 as MouseEvent }

export declare type MouseEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
T,
MouseEvent_2<T>
>;

/**
 * A global namespace for `hover` event.
 */
export declare const mousehoverEvent = "hover";

/**
 * A global namespace for mouse hover events.
 */
export declare const mouseHoverEvents: string[];

/**
 * A global namespace for `mousein` event.
 */
export declare const mouseinEvent = "mousein";

/**
 * A global namespace for `mouseleave` event.
 */
export declare const mouseleaveEvent = "mouseleave";

/**
 * A global namespace for `mousemove` event.
 */
export declare const mousemoveEvent = "mousemove";

/**
 * A global namespace for `mouseout` event.
 */
export declare const mouseoutEvent = "mouseout";

/**
 * A global namespace for `mouseover` event.
 */
export declare const mouseoverEvent = "mouseover";

/**
 * A global namespace for mouse events equivalent to touch events.
 */
export declare const mouseSwipeEvents: {
    start: string;
    end: string;
    move: string;
    cancel: string;
};

/**
 * A global namespace for `mouseup` event.
 */
export declare const mouseupEvent = "mouseup";

/**
 * A global namespace for `mousewheel` event.
 */
export declare const mousewheelEvent = "mousewheel";

/**
 * A global namespace for `move` event.
 */
export declare const moveEvent = "move";

/**
 * Type definitions addapted from React 18.2
 * Project: https://react.dev/
 */

declare type NativeAnimationEvent = AnimationEvent_2;

declare type NativeClipboardEvent = ClipboardEvent_2;

declare type NativeCompositionEvent = CompositionEvent_2;

declare type NativeDragEvent = DragEvent_2;

/**
 * currentTarget - a reference to the element on which the event listener is registered.
 *
 * target - a reference to the element from which the event was originally dispatched.
 * This might be a child element to the element on which the event listener is registered.
 * If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682
 */
export declare type NativeEvent<T extends EventTarget = HTMLElement, E = Event> = BaseEvent<
E,
T,
T
>;

export declare type NativeEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
T,
NativeEvent<T>
>;

/**
 * A global namespace for all browser native events.
 */
export declare const nativeEvents: {
    DOMContentLoaded: string;
    DOMMouseScroll: string;
    abort: string;
    beforeunload: string;
    blur: string;
    change: string;
    click: string;
    contextmenu: string;
    dblclick: string;
    error: string;
    focus: string;
    focusin: string;
    focusout: string;
    gesturechange: string;
    gestureend: string;
    gesturestart: string;
    hover: string;
    keydown: string;
    keypress: string;
    keyup: string;
    load: string;
    mousedown: string;
    mousemove: string;
    mousein: string;
    mouseout: string;
    mouseenter: string;
    mouseleave: string;
    mouseover: string;
    mouseup: string;
    mousewheel: string;
    move: string;
    orientationchange: string;
    pointercancel: string;
    pointerdown: string;
    pointerleave: string;
    pointermove: string;
    pointerup: string;
    readystatechange: string;
    reset: string;
    resize: string;
    scroll: string;
    select: string;
    selectend: string;
    selectstart: string;
    submit: string;
    touchcancel: string;
    touchend: string;
    touchmove: string;
    touchstart: string;
    unload: string;
};

declare type NativeFocusEvent = FocusEvent_2;

declare type NativeKeyboardEvent = KeyboardEvent_2;

declare type NativeMouseEvent = MouseEvent_2;

declare type NativePointerEvent = PointerEvent_2;

declare type NativeTouchEvent = TouchEvent_2;

declare type NativeTransitionEvent = TransitionEvent_2;

declare type NativeUIEvent = UIEvent_2;

declare type NativeWheelEvent = WheelEvent_2;

export declare interface NavigatorUA extends Navigator {
    readonly userAgentData: NavigatorUAData;
}

export declare interface NavigatorUABrand {
    readonly brand: string;
    readonly version: string;
}

export declare interface NavigatorUAData {
    readonly brands: NavigatorUABrand[];
    readonly mobile: boolean;
    readonly platform: string;
}

/** A generic function with empty body. */
export declare const noop: () => void;

/**
 * Utility to normalize component options.
 *
 * @param element target
 * @param defaultOps component default options
 * @param inputOps component instance options
 * @param ns component namespace
 * @return normalized component options object
 */
export declare const normalizeOptions: <T extends {
    [key: string]: unknown;
}>(element: Element, defaultOps: T, inputOps: Partial<T>, ns?: string) => T;

/**
 * Utility to normalize component options
 *
 * @param value the input value
 * @return the normalized value
 */
export declare const normalizeValue: (value?: unknown) => NormalValue;

declare type NormalValue = boolean | number | string | Fn | null;

/**
 * Shortcut for `Object.assign()` static method.
 *
 * @param obj a target object
 * @param source source object(s)
 * @see https://github.com/devinrhode2/ObjectTyped/blob/master/src/index.ts
 */
export declare const ObjectAssign: typeof ObjectAssignTyped;

/**
 * Overloads for Object.assign.
 *
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/object-assign/index.d.ts
 */
declare function ObjectAssignTyped<T, U>(target: T, source: U): T & U;

declare function ObjectAssignTyped<T, U, V>(target: T, source1: U, source2: V): T & U & V;

declare function ObjectAssignTyped<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;

declare function ObjectAssignTyped<T, U, V, W, Q>(target: T, source1: U, source2: V, source3: W, source4: Q): T & U & V & W & Q;

declare function ObjectAssignTyped<T, U, V, W, Q, R>(target: T, source1: U, source2: V, source3: W, source4: Q, source5: R): T & U & V & W & Q & R;

declare function ObjectAssignTyped(target: unknown, ...sources: unknown[]): unknown;

/**
 * Shortcut for `Object.entries()` static method.
 *
 * @param obj a target object
 * @returns the entries of an object in an array format [key, value][]
 * @see https://github.com/devinrhode2/ObjectTyped/blob/master/src/index.ts
 */
export declare const ObjectEntries: <O extends Record<keyof O, unknown>>(obj: O) => [keyof O, O[keyof O]][];

/**
 * Shortcut for `Object.fromEntries()` static method.
 *
 * @param entries a target entries object
 * @returns a new Object created from the specified entries in array format [key, value][]
 * @see https://github.com/devinrhode2/ObjectTyped/blob/master/src/index.ts
 */
export declare const ObjectFromEntries: <K extends string, V>(entries: [K, V][]) => Record<K, V>;

/**
 * A shortcut to `Object.hasOwn()` static method to work
 * with regular `Object` elements.
 *
 * @see https://fettblog.eu/typescript-hasownproperty/
 * @param obj the target object
 * @param prop the property to check
 * @returns the query result
 */
export declare const ObjectHasOwn: <T extends object, K extends PropertyKey>(obj: T, prop: K) => obj is T & Record<K, unknown>;

/**
 * Shortcut for `Object.keys()` static method.
 *
 * @param obj a target object
 * @returns an array with object keys
 * @see https://github.com/devinrhode2/ObjectTyped/blob/master/src/index.ts
 */
export declare const ObjectKeys: <O extends Record<keyof O, unknown>>(obj: O) => (keyof O)[];

/**
 * Shortcut for `Object.values()` static method.
 *
 * @param obj a target object
 * @returns an array with the object values
 * @see https://github.com/devinrhode2/ObjectTyped/blob/master/src/index.ts
 */
export declare const ObjectValues: <O extends Record<string, unknown>>(obj: O) => O[keyof O][];

/**
 * Remove eventListener from an `EventTarget` object.
 */
export declare const off: <T extends EventTarget, L = EventListener>(element: T, eventName: string, listener: L, options?: AddEventListenerOptions) => void;

/**
 * A global namespace for `offsetHeight` property.
 */
export declare const offsetHeight = "offsetHeight";

export declare interface OffsetRect {
    width: number;
    height: number;
    x: number;
    y: number;
}

/**
 * A global namespace for `offsetWidth` property.
 */
export declare const offsetWidth = "offsetWidth";

/**
 * Add eventListener to an `EventTarget` object.
 */
export declare const on: <T extends EventTarget, L = EventListener>(element: T, eventName: string, listener: L, options?: AddEventListenerOptions) => void;

/**
 * Add an `eventListener` to an `EventTarget`
 * element and remove it once callback is called.
 */
export declare const one: <T extends EventTarget, L = EventListener>(element: T, eventName: string, listener: L, options?: AddEventListenerOptions) => void;

/**
 * A global namespace for `orientationchange` event.
 */
export declare const orientationchangeEvent = "orientationchange";

export declare interface OriginalEvent extends CustomEvent<unknown> {
    readonly type: string;
    relatedTarget?: EventTarget & HTMLElement;
}

/**
 * A global namespace for most scroll event listeners.
 */
export declare const passiveHandler: Partial<AddEventListenerOptions>;

/**
 * A global namespace for `pointercancel` event.
 */
export declare const pointercancelEvent = "pointercancel";

/**
 * A global namespace for `pointerdown` event.
 */
export declare const pointerdownEvent = "pointerdown";

declare interface PointerEvent_2<T extends EventTarget = HTMLElement>
extends MouseEvent_2<T, NativePointerEvent> {
    pointerId: number;
    pressure: number;
    tangentialPressure: number;
    tiltX: number;
    tiltY: number;
    twist: number;
    width: number;
    height: number;
    pointerType: "mouse" | "pen" | "touch";
    isPrimary: boolean;
}
export { PointerEvent_2 as PointerEvent }

export declare type PointerEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
T,
PointerEvent_2<T>
>;

/**
 * A global namespace for `pointerleave` event.
 */
export declare const pointerleaveEvent = "pointerleave";

/**
 * A global namespace for `pointermove` event.
 */
export declare const pointermoveEvent = "pointermove";

/**
 * A global namespace for `pointerup` event.
 */
export declare const pointerupEvent = "pointerup";

export declare type PossibleEventTarget = EventTarget & (Element | Document | Window);

/**
 * Utility to check if target is typeof `Element`, `Node`
 * or find one that matches a selector.
 *
 * @param selector the input selector or target element
 * @param parent optional node to look into
 * @return the `Element` or null
 */
export declare const querySelector: <T extends Element>(selector: T | string, parent?: ParentNode) => T | null;

/**
 * A shortcut for `(document|Element).querySelectorAll`.
 *
 * @param selector the input selector
 * @param parent optional node to look into
 * @return the query result
 */
export declare const querySelectorAll: <T extends Element>(selector: string, parent?: ParentNode) => NodeListOf<T>;

/**
 * A global namespace for `readystatechange` event.
 */
export declare const readystatechangeEvent = "readystatechange";

/**
 * Utility to force re-paint of an `HTMLElement` target.
 *
 * @param element is the target
 * @return the `Element.offsetHeight` value
 */
export declare const reflow: (element: HTMLElement) => number;

/**
 * Shortcut for `Element.removeAttribute()` method.
 *
 * @param element target element
 * @param att attribute name
 */
export declare const removeAttribute: (element: Element, att: string) => void;

/**
 * Shortcut for `Element.removeAttributeNS()` method.
 *
 * @param ns attribute namespace
 * @param  element target element
 * @param att attribute name
 */
export declare const removeAttributeNS: (ns: string, element: Element, att: string) => void;

/**
 * Remove one or more classes from `Element.classList`.
 *
 * @param element target
 * @param classNAME to remove
 */
export declare const removeClass: (element: Element, ...classNAME: string[]) => void;

/**
 * A global namespace for 'removeEventListener' string.
 */
declare const removeEventListener_2 = "removeEventListener";
export { removeEventListener_2 as removeEventListener }

/**
 * A global namespace for `reset` event.
 */
export declare const resetEvent = "reset";

/**
 * A global namespace for `resize` event.
 */
export declare const resizeEvent = "resize";

/**
 * A global namespace for `scroll` event.
 */
export declare const scrollEvent = "scroll";

/**
 * A global namespace for `scrollHeight` property.
 */
export declare const scrollHeight = "scrollHeight";

/**
 * A global namespace for `scrollWidth` property.
 */
export declare const scrollWidth = "scrollWidth";

/**
 * A global namespace for the `selectend` event.
 */
export declare const selectendEvent = "selectend";

/**
 * A global namespace for `select` event.
 */
export declare const selectEvent = "select";

/**
 * A global namespace for the `selectstart` event.
 */
export declare const selectstartEvent = "selectstart";

/**
 * Shortcut for `Element.setAttribute()` method.
 *
 * @param element target element
 * @param att attribute name
 * @param value attribute value
 */
export declare const setAttribute: (element: Element, att: string, value: string) => void;

/**
 * Shortcut for `Element.setAttributeNS()` method.
 *
 * @param ns attribute namespace
 * @param element target element
 * @param att attribute name
 * @param value attribute value
 */
export declare const setAttributeNS: (ns: string, element: Element, att: string, value: string) => void;

/**
 * Shortcut for multiple uses of `HTMLElement.style.propertyName` method.
 *
 * @param element target element
 * @param styles attribute value
 */
export declare const setElementStyle: (element: Element, styles: Partial<CSS4Declaration>) => void;

/**
 * A global namespace for `submit` event.
 */
export declare const submitEvent = "submit";

/**
 * An accessor that checks for CSS3 3D transform support.
 */
export declare const support3DTransform: () => boolean;

/**
 * An accessor that checks for CSS3 animation support.
 */
export declare const supportAnimation: () => boolean;

/**
 * An accessor that checks for passive events support,
 * in general event options are not suited for scroll prevention.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */
export declare const supportPassive: () => boolean;

/**
 * An accessor that checks for touch events support.
 */
export declare const supportTouch: () => boolean;

/**
 * An accessor that checks for CSS3 transform support.
 */
export declare const supportTransform: () => boolean;

/**
 * An accessor that checks for CSS3 transition support.
 */
export declare const supportTransition: () => boolean;

/**
 * A global namespace for `touchcancel` event.
 */
export declare const tabindex = "tabindex";

/**
 * An interface for one or more `TimerHandler`s per `Element`.
 *
 * @see https://github.com/thednp/navbar/
 */
export declare const Timer: {
    /**
     * Sets a new timeout timer for an element, or element -> key association.
     *
     * @param element target element
     * @param callback the callback
     * @param delay the execution delay
     * @param key a unique key
     */
    set: (element: Element, callback: TimerHandler, delay: number, key?: string) => void;
    /**
     * Returns the timer associated with the target.
     *
     * @param element target element
     * @param key a unique
     * @returns the timer
     */
    get: (element: Element, key?: string) => number | null;
    /**
     * Clears the element's timer.
     *
     * @param element target element
     * @param key a unique key
     */
    clear: (element: Element, key?: string) => void;
};

/**
 * Utility to toggle focus trap inside a designated target element;
 * @param target
 */
export declare const toggleFocusTrap: (target: Element) => void;

/**
 * Shortcut for `String.toLowerCase()`.
 *
 * @param source input string
 * @returns lowercase output string
 */
export declare const toLowerCase: (source: string) => string;

/**
 * A global namespace for `touchcancel` event.
 */
export declare const touchcancelEvent = "touchcancel";

/**
 * A global namespace for `touchend` event.
 */
export declare const touchendEvent = "touchend";

declare interface TouchEvent_2<T extends EventTarget = HTMLElement>
extends UIEvent_2<T, NativeTouchEvent> {
    altKey: boolean;
    changedTouches: TouchList;
    ctrlKey: boolean;
    /**
     * See [DOM Level 3 Events spec](https://www.w3.org/TR/uievents-key/#keys-modifier). for a list of valid (case-sensitive) arguments to this method.
     */
    getModifierState(key: ModifierKey): boolean;
    metaKey: boolean;
    shiftKey: boolean;
    targetTouches: TouchList;
    touches: TouchList;
}
export { TouchEvent_2 as TouchEvent }

export declare type TouchEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
T,
TouchEvent_2<T>
>;

/**
 * A global namespace for touch events.
 */
export declare const touchEvents: {
    start: string;
    end: string;
    move: string;
    cancel: string;
};

/**
 * A global namespace for `touchmove` event.
 */
export declare const touchmoveEvent = "touchmove";

/**
 * A global namespace for `touchstart` event.
 */
export declare const touchstartEvent = "touchstart";

/**
 * Shortcut for `String.toUpperCase()`.
 *
 * @param source input string
 * @returns uppercase output string
 */
export declare const toUpperCase: (source: string) => string;

/**
 * A global namespace for 'transitionDelay' string.
 */
export declare const transitionDelay = "transitionDelay";

/**
 * A global namespace for 'transitionDuration' string.
 */
export declare const transitionDuration = "transitionDuration";

/**
 * A global namespace for 'transitionend' string.
 */
export declare const transitionEndEvent = "transitionend";

declare interface TransitionEvent_2<T extends EventTarget = HTMLElement>
extends NativeEvent<T, NativeTransitionEvent> {
    elapsedTime: number;
    propertyName: string;
    pseudoElement: string;
}
export { TransitionEvent_2 as TransitionEvent }

export declare type TransitionEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
T,
TransitionEvent_2<T>
>;

/**
 * A global namespace for `transitionProperty` string for modern browsers.
 */
export declare const transitionProperty = "transitionProperty";

declare interface UIEvent_2<T extends EventTarget = HTMLElement, E = NativeUIEvent>
extends NativeEvent<T, E> {
    detail: number;
    view: AbstractView;
}
export { UIEvent_2 as UIEvent }

export declare type UIEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
T,
UIEvent_2<T>
>;

/**
 * A global namespace for `unload` event.
 */
export declare const unloadEvent = "unload";

/**
 * A global namespace for `navigator.userAgent` string.
 */
export declare const userAgent: string;

/**
 * A global namespace for `userAgentData` object.
 */
export declare const userAgentData: NavigatorUA["userAgentData"];

export { version }

declare interface WheelEvent_2<T extends EventTarget = HTMLElement>
extends MouseEvent_2<T, NativeWheelEvent> {
    deltaMode: number;
    deltaX: number;
    deltaY: number;
    deltaZ: number;
}
export { WheelEvent_2 as WheelEvent }

export declare type WheelEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
T,
WheelEvent_2<T>
>;

export { }

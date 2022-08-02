import on from './event/on';
import off from './event/off';
import isScaledElement from './is/isScaledElement';
declare const SHORTY: {
    ariaChecked: string;
    ariaDescription: string;
    ariaDescribedBy: string;
    ariaExpanded: string;
    ariaHidden: string;
    ariaHasPopup: string;
    ariaLabel: string;
    ariaLabelledBy: string;
    ariaModal: string;
    ariaPressed: string;
    ariaSelected: string;
    ariaValueMin: string;
    ariaValueMax: string;
    ariaValueNow: string;
    ariaValueText: string;
    nativeEvents: {
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
    abortEvent: string;
    blurEvent: string;
    moveEvent: string;
    changeEvent: string;
    errorEvent: string;
    resetEvent: string;
    resizeEvent: string;
    scrollEvent: string;
    submitEvent: string;
    loadEvent: string;
    loadstartEvent: string;
    unloadEvent: string;
    readystatechangeEvent: string;
    beforeunloadEvent: string;
    orientationchangeEvent: string;
    contextmenuEvent: string;
    DOMContentLoadedEvent: string;
    DOMMouseScrollEvent: string;
    selectEvent: string;
    selectendEvent: string;
    selectstartEvent: string;
    mouseClickEvents: {
        down: string;
        up: string;
    };
    mouseclickEvent: string;
    mousedblclickEvent: string;
    mousedownEvent: string;
    mouseupEvent: string;
    mousehoverEvent: string;
    mouseHoverEvents: string[];
    mouseenterEvent: string;
    mouseleaveEvent: string;
    mouseinEvent: string;
    mouseoutEvent: string;
    mouseoverEvent: string;
    mousemoveEvent: string;
    mousewheelEvent: string;
    mouseSwipeEvents: {
        start: string;
        end: string;
        move: string;
        cancel: string;
    };
    touchEvents: {
        start: string;
        end: string;
        move: string;
        cancel: string;
    };
    touchstartEvent: string;
    touchmoveEvent: string;
    touchcancelEvent: string;
    touchendEvent: string;
    pointercancelEvent: string;
    pointerdownEvent: string;
    pointerleaveEvent: string;
    pointermoveEvent: string;
    pointerupEvent: string;
    focusEvents: {
        in: string;
        out: string;
    };
    focusEvent: string;
    focusinEvent: string;
    focusoutEvent: string;
    gesturechangeEvent: string;
    gestureendEvent: string;
    gesturestartEvent: string;
    bezierEasings: {
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
    animationDuration: string;
    animationDelay: string;
    animationName: string;
    animationEndEvent: string;
    transitionDuration: string;
    transitionDelay: string;
    transitionEndEvent: string;
    transitionProperty: string;
    isMobile: boolean;
    isApple: boolean;
    isFirefox: boolean;
    support3DTransform: boolean;
    supportPassive: boolean;
    supportTransform: boolean;
    supportTouch: boolean;
    supportAnimation: boolean;
    supportTransition: boolean;
    addEventListener: string;
    removeEventListener: string;
    keyboardEventKeys: {
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
    keydownEvent: string;
    keypressEvent: string;
    keyupEvent: string;
    keyAlt: string;
    keyArrowDown: string;
    keyArrowLeft: string;
    keyArrowRight: string;
    keyArrowUp: string;
    keyBackspace: string;
    keyCapsLock: string;
    keyControl: string;
    keyDelete: string;
    keyEnter: string;
    keyEscape: string;
    keyInsert: string;
    keyMeta: string;
    keyPause: string;
    keyScrollLock: string;
    keyShift: string;
    keySpace: string;
    keyTab: string;
    offsetHeight: string;
    offsetWidth: string;
    scrollHeight: string;
    scrollWidth: string;
    userAgentData: import("./interface/navigatorUA").NavigatorUAData;
    userAgent: string;
    tabindex: string;
    addClass: (element: HTMLElement, ...classNAME: string[]) => void;
    removeClass: (element: HTMLElement, ...classNAME: string[]) => void;
    hasClass: (element: HTMLElement, classNAME: string) => boolean;
    on: typeof on;
    off: typeof off;
    one: (element: EventTarget, eventName: string, listener: EventListener, options?: AddEventListenerOptions) => void;
    dispatchEvent: (element: EventTarget, event: Event) => boolean;
    distinct: <T>(value: T, index: number, arr: T[]) => boolean;
    Data: {
        set: <T_1 extends {
            [x: string]: any;
        }>(element: HTMLElement, component: string, instance: T_1) => void;
        getAllFor: (component: string) => Map<HTMLElement, {
            [x: string]: any;
        }>;
        get: (element: HTMLElement, component: string) => {
            [x: string]: any;
        };
        remove: <S extends string, E extends HTMLElement>(element: E, component: S) => void;
    };
    getInstance: (target: HTMLElement, component: string) => {
        [x: string]: any;
    };
    createElement: (param?: string | Partial<HTMLElement>) => HTMLElement;
    createElementNS: (ns?: string, param?: string | Partial<HTMLElement>) => HTMLElement;
    toUpperCase: (source: string) => string;
    toLowerCase: (source: string) => string;
    Timer: {
        set: (element: HTMLElement, callback: TimerHandler, delay: number, key?: string) => void;
        get: (element: HTMLElement, key?: string) => number;
        clear: (element: HTMLElement, key?: string) => void;
    };
    emulateAnimationEnd: (element: HTMLElement, handler: EventListener) => void;
    emulateTransitionEnd: (element: HTMLElement, handler: EventListener) => void;
    isElementInScrollRange: (element?: HTMLElement) => boolean;
    isElementInViewport: (element?: HTMLElement) => boolean;
    passiveHandler: Partial<AddEventListenerOptions>;
    getElementAnimationDuration: (element: HTMLElement) => number;
    getElementAnimationDelay: (element: HTMLElement) => number;
    getElementTransitionDuration: (element: HTMLElement) => number;
    getElementTransitionDelay: (element: HTMLElement) => number;
    getNodeScroll: (element: HTMLElement | Window) => {
        x: number;
        y: number;
    };
    getParentNode: (node: Node) => Node;
    getRectRelativeToOffsetParent: (element: HTMLElement, offsetParent: HTMLElement, scroll: {
        x: number;
        y: number;
    }) => import("./interface/offsetRect").default;
    getWindow: (node?: Node) => Window;
    isArray: (obj?: any) => obj is any[];
    isCanvas: (element?: any) => element is HTMLCanvasElement;
    isString: (str?: any) => str is string;
    isCustomElement: <T_2 extends import("./interface/customElement").default>(element?: any) => element is T_2;
    isElement: (element?: any) => element is Element;
    isMap: (obj?: any) => obj is Map<any, any>;
    isWeakMap: (obj?: any) => obj is WeakMap<any, any>;
    isNode: (node?: any) => node is Node;
    isNumber: (num?: any) => num is number;
    isHTMLElement: (element?: any) => element is HTMLElement;
    isHTMLImageElement: (element?: any) => element is HTMLImageElement;
    isSVGElement: (element?: any) => element is SVGElement;
    isNodeList: (obj?: any) => obj is NodeList;
    isHTMLCollection: (obj?: any) => obj is HTMLCollection;
    isScaledElement: typeof isScaledElement;
    isTableElement: (element?: any) => element is HTMLTableElement | HTMLTableCellElement;
    isShadowRoot: (element?: any) => element is ShadowRoot;
    isDocument: (obj?: any) => obj is Document;
    isElementsArray: (obj?: any) => obj is HTMLElement[];
    isFunction: (fn?: any) => fn is Function;
    isObject: (obj?: any) => obj is object;
    isWindow: (obj?: any) => obj is Window;
    isMedia: (element?: any) => element is HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | SVGElement;
    isRTL: (node?: Node) => boolean;
    closest: (element: HTMLElement, selector: string) => HTMLElement;
    querySelector: (selector: string | Node, parent?: ParentNode) => HTMLElement;
    getCustomElements: (parent?: ParentNode) => import("./interface/customElement").default[];
    getElementById: (id: string, context?: Node) => HTMLElement;
    querySelectorAll: (selector: string, parent?: ParentNode) => NodeListOf<HTMLElement>;
    getElementsByClassName: (selector: string, parent?: ParentNode) => HTMLCollectionOf<HTMLElement>;
    getElementsByTagName: (selector: string, parent?: ParentNode) => HTMLCollectionOf<HTMLElement>;
    matches: (target: Element, selector: string) => boolean;
    normalizeValue: (value?: any) => import("./types").optionValues;
    normalizeOptions: <T_3 extends {
        [key: string]: import("./types").optionValues;
    }>(element: HTMLElement, defaultOps: T_3, inputOps: Partial<T_3>, ns?: string) => T_3;
    reflow: (element: HTMLElement) => number;
    noop: () => void;
    focus: (element: HTMLOrSVGElement, options?: FocusOptions) => void;
    getUID: (element: HTMLElement, key?: string) => number;
    ArrayFrom: <T_4>(arr: ArrayLike<T_4> | Iterable<T_4>) => T_4[];
    Float32ArrayFrom: (arr: ArrayLike<number> | Iterable<number>) => Float32Array;
    Float64ArrayFrom: (arr: ArrayLike<number> | Iterable<number>) => Float64Array;
    ObjectAssign: <A extends {}, B>(obj: A, ...source: B[]) => B extends any[] ? any : A & B;
    ObjectEntries: <O extends {}>(obj: O) => [keyof O, O[keyof O]][];
    ObjectKeys: (obj: Record<string, any>) => string[];
    ObjectValues: <O_1 extends {}>(obj: O_1) => [O_1[keyof O_1]][];
    OriginalEvent: <T_5>(EventType: string, config?: CustomEventInit<T_5>) => import("./interface/originalEvent").default<T_5>;
    getBoundingClientRect: (element: HTMLElement, includeScale?: boolean) => import("./interface/boundingClientRect").default;
    getDocument: (node?: any) => Document;
    getDocumentBody: (node?: any) => HTMLElement;
    getDocumentElement: (node?: Node) => HTMLElement;
    getDocumentHead: (node?: Node) => HTMLElement & HTMLHeadElement;
    getElementStyle: (element: HTMLElement, property: string) => string;
    setElementStyle: (element: HTMLElement, styles: import("./interface/css4Declaration").default) => void;
    hasAttribute: (element: HTMLElement, att: string) => boolean;
    hasAttributeNS: (ns: string, element: HTMLElement, att: string) => boolean;
    getAttribute: (element: HTMLElement, att: string) => string;
    getAttributeNS: (ns: string, element: HTMLElement, att: string) => string;
    setAttribute: (element: HTMLElement, att: string, value: string) => void;
    setAttributeNS: (ns: string, element: HTMLElement, att: string, value: string) => void;
    removeAttribute: (element: HTMLElement, att: string) => void;
    removeAttributeNS: (ns: string, element: HTMLElement, att: string) => void;
};
export default SHORTY;

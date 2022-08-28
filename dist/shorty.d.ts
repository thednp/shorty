// Generated by dts-bundle-generator v6.12.0

export interface NavigatorUABrand {
	readonly brand: string;
	readonly version: string;
}
export interface NavigatorUAData {
	readonly brands: NavigatorUABrand[];
	readonly mobile: boolean;
	readonly platform: string;
}
export interface OriginalEvent extends CustomEvent<any> {
	readonly type: string;
	relatedTarget?: EventTarget;
}
export interface OffsetRect {
	width: number;
	height: number;
	x: number;
	y: number;
}
export interface CustomElement extends HTMLElement {
	shadowRoot: ShadowRoot;
	connectedCallback?: () => void;
	disconnectedCallback?: () => void;
	adoptedCallback?: () => void;
	attributeChangedCallback?: () => void;
	[key: string]: any;
}
export interface BoundingClientRect {
	width: number;
	height: number;
	top: number;
	left: number;
	right: number;
	bottom: number;
	x: number;
	y: number;
}
export interface CSS4Declaration extends Exclude<() => string | symbol, CSSStyleDeclaration> {
	[key: string]: string;
}
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
	userAgentData: NavigatorUAData;
	userAgent: string;
	tabindex: string;
	addClass: (element: HTMLElement, ...classNAME: string[]) => void;
	removeClass: (element: HTMLElement, ...classNAME: string[]) => void;
	hasClass: (element: HTMLElement, classNAME: string) => boolean;
	on: (element: EventTarget, eventName: string, listener: EventListener, options?: AddEventListenerOptions | undefined) => void;
	off: (element: EventTarget, eventName: string, listener: EventListener, options?: AddEventListenerOptions | undefined) => void;
	one: (element: EventTarget, eventName: string, listener: EventListener, options?: AddEventListenerOptions | undefined) => void;
	documentBody: HTMLElement;
	documentElement: HTMLElement;
	documentHead: HTMLHeadElement;
	dispatchEvent: (element: EventTarget, event: Event) => boolean;
	distinct: <T>(value: T, index: number, arr: T[]) => boolean;
	Data: {
		set: <T_1 extends new (...args: ConstructorParameters<T_1>) => InstanceType<T_1>>(element: HTMLElement, component: T_1, instance: InstanceType<T_1>) => void;
		getAllFor: <T_2 extends new (...args: ConstructorParameters<T_2>) => InstanceType<T_2>>(component: T_2) => Map<HTMLElement, InstanceType<T_2>> | null;
		get: <T_3 extends new (...args: ConstructorParameters<T_3>) => InstanceType<T_3>>(element: HTMLElement, component: T_3) => InstanceType<T_3> | null;
		remove: <T_4 extends new (...args: ConstructorParameters<T_4>) => InstanceType<T_4>>(element: HTMLElement, component: T_4) => void;
	};
	getInstance: <T_5 extends new (...args: ConstructorParameters<T_5>) => InstanceType<T_5>>(target: HTMLElement, component: T_5) => InstanceType<T_5> | null;
	createElement: (param?: string | undefined) => HTMLElement | undefined;
	createElementNS: (ns: string, param?: string | undefined) => HTMLElement | undefined;
	createCustomEvent: <T_6 extends OriginalEvent>(eventType: string, config?: CustomEventInit<any> | undefined) => T_6;
	toUpperCase: (source: string) => string;
	toLowerCase: (source: string) => string;
	Timer: {
		set: (element: HTMLElement, callback: TimerHandler, delay: number, key?: string | undefined) => void;
		get: (element: HTMLElement, key?: string | undefined) => number | null;
		clear: (element: HTMLElement, key?: string | undefined) => void;
	};
	emulateAnimationEnd: (element: HTMLElement, handler: EventListener) => void;
	emulateTransitionEnd: (element: HTMLElement, handler: EventListener) => void;
	isElementInScrollRange: (element?: HTMLElement | undefined) => boolean;
	isElementInViewport: (element?: HTMLElement | undefined) => boolean;
	passiveHandler: Partial<AddEventListenerOptions>;
	getElementAnimationDuration: (element: HTMLElement) => number;
	getElementAnimationDelay: (element: HTMLElement) => number;
	getElementTransitionDuration: (element: HTMLElement) => number;
	getElementTransitionDelay: (element: HTMLElement) => number;
	getNodeScroll: (element: HTMLElement | Window) => {
		x: number;
		y: number;
	};
	getParentNode: (node: Node) => Node | ParentNode;
	getRectRelativeToOffsetParent: (element: HTMLElement, offsetParent: HTMLElement, scroll: {
		x: number;
		y: number;
	}) => OffsetRect;
	getWindow: (node?: Node | undefined) => Window;
	isArray: (obj?: any) => obj is any[];
	isCanvas: (element?: Node | undefined) => element is HTMLCanvasElement;
	isString: (str?: string | undefined) => str is string;
	isCustomElement: <T_7 extends CustomElement>(element?: Node | T_7 | undefined) => element is T_7;
	isElement: (element?: Element | Node | undefined) => element is Element;
	isJSON: (str?: string | undefined) => boolean;
	isMap: <T_8 extends Map<any, any>>(obj?: T_8 | undefined) => obj is T_8;
	isWeakMap: <T_9 extends WeakMap<any, unknown>>(obj?: T_9 | undefined) => obj is T_9;
	isNode: (node?: Node | undefined) => node is Node;
	isNumber: (num?: number | undefined) => num is number;
	isHTMLElement: (element?: Node | HTMLElement | undefined) => element is HTMLElement;
	isHTMLImageElement: (element?: HTMLImageElement | undefined) => element is HTMLImageElement;
	isSVGElement: (element?: SVGElement | undefined) => element is SVGElement;
	isNodeList: (obj?: NodeList | undefined) => obj is NodeList;
	isHTMLCollection: (obj?: HTMLCollection | undefined) => obj is HTMLCollection;
	isScaledElement: (element?: HTMLElement | undefined) => boolean;
	isTableElement: (element?: HTMLTableElement | HTMLTableCellElement | undefined) => element is HTMLTableElement | HTMLTableCellElement;
	isShadowRoot: (element?: Node | ShadowRoot | undefined) => element is ShadowRoot;
	isDocument: (obj?: Node | Document | undefined) => obj is Document;
	isElementsArray: (obj?: any) => obj is HTMLElement[];
	isFunction: <T_10 extends (...arg0: any[]) => any>(fn?: T_10 | undefined) => fn is T_10;
	isObject: (obj?: object | undefined) => obj is object;
	isWindow: (obj?: Node | Window | undefined) => obj is Window;
	isMedia: (element?: HTMLCanvasElement | HTMLImageElement | SVGElement | HTMLVideoElement | undefined) => element is HTMLCanvasElement | HTMLImageElement | SVGElement | HTMLVideoElement;
	isRTL: (node?: Node | undefined) => boolean;
	closest: (element: HTMLElement, selector: string) => HTMLElement | null;
	querySelector: (selector: string | Node, parent?: ParentNode | undefined) => HTMLElement | null;
	getCustomElements: (parent?: ParentNode | undefined) => CustomElement[];
	getElementById: (id: string, context?: Node | undefined) => HTMLElement | null;
	querySelectorAll: (selector: string, parent?: ParentNode | undefined) => NodeListOf<HTMLElement>;
	getElementsByClassName: (selector: string, parent?: ParentNode | undefined) => HTMLCollectionOf<HTMLElement>;
	getElementsByTagName: (selector: string, parent?: ParentNode | undefined) => HTMLCollectionOf<HTMLElement>;
	matches: (target: Element, selector: string) => boolean;
	normalizeValue: (value?: string | number | boolean | undefined) => string | number | boolean | ((...args: any[]) => any) | null;
	normalizeOptions: <T_11 extends {
		[key: string]: any;
	}>(element: HTMLElement, defaultOps: T_11, inputOps: Partial<T_11>, ns?: string | undefined) => T_11;
	reflow: (element: HTMLElement) => number;
	noop: () => void;
	focus: (element: HTMLOrSVGElement, options?: FocusOptions | undefined) => void;
	getUID: (element: HTMLElement, key?: string | undefined) => number;
	ArrayFrom: <T_12>(arr: ArrayLike<T_12> | Iterable<T_12>) => T_12[];
	Float32ArrayFrom: (arr: ArrayLike<number> | Iterable<number>) => Float32Array;
	Float64ArrayFrom: (arr: ArrayLike<number> | Iterable<number>) => Float64Array;
	ObjectAssign: {
		<T_13, U>(target: T_13, source: U): T_13 & U;
		<T_14, U_1, V>(target: T_14, source1: U_1, source2: V): T_14 & U_1 & V;
		<T_15, U_2, V_1, W>(target: T_15, source1: U_2, source2: V_1, source3: W): T_15 & U_2 & V_1 & W;
		<T_16, U_3, V_2, W_1, Q>(target: T_16, source1: U_3, source2: V_2, source3: W_1, source4: Q): T_16 & U_3 & V_2 & W_1 & Q;
		<T_17, U_4, V_3, W_2, Q_1, R>(target: T_17, source1: U_4, source2: V_3, source3: W_2, source4: Q_1, source5: R): T_17 & U_4 & V_3 & W_2 & Q_1 & R;
		(target: any, ...sources: any[]): any;
	};
	ObjectEntries: <O extends Record<string, any>>(obj: O) => [
		keyof O,
		O[keyof O]
	][];
	ObjectKeys: <O_1 extends Record<string, any>>(obj: O_1) => (keyof O_1)[];
	ObjectValues: <O_2 extends Record<string, unknown>>(obj: O_2) => O_2[keyof O_2][];
	getBoundingClientRect: (element: HTMLElement, includeScale?: boolean | undefined) => BoundingClientRect;
	getDocument: (node?: Node | Document | Window | undefined) => Document;
	getDocumentBody: (node?: Node | undefined) => HTMLElement;
	getDocumentElement: (node?: Node | undefined) => HTMLElement;
	getDocumentHead: (node?: Node | undefined) => HTMLElement & HTMLHeadElement;
	getElementStyle: (element: HTMLElement, property: string) => string;
	setElementStyle: (element: HTMLElement, styles: Partial<CSS4Declaration>) => void;
	hasAttribute: (element: HTMLElement, att: string) => boolean;
	hasAttributeNS: (ns: string, element: HTMLElement, att: string) => boolean;
	getAttribute: (element: HTMLElement, att: string) => string | null;
	getAttributeNS: (ns: string, element: HTMLElement, att: string) => string | null;
	setAttribute: (element: HTMLElement, att: string, value: string) => void;
	setAttributeNS: (ns: string, element: HTMLElement, att: string, value: string) => void;
	removeAttribute: (element: HTMLElement, att: string) => void;
	removeAttributeNS: (ns: string, element: HTMLElement, att: string) => void;
};

export {
	SHORTY as default,
};

export {};

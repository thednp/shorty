/**
 * Type definitions addapted from React 18.2
 * Project: https://react.dev/
 */

type NativeAnimationEvent = AnimationEvent;
type NativeClipboardEvent = ClipboardEvent;
type NativeCompositionEvent = CompositionEvent;
type NativeDragEvent = DragEvent;
type NativeFocusEvent = FocusEvent;
type NativeKeyboardEvent = KeyboardEvent;
type NativeMouseEvent = MouseEvent;
type NativeTouchEvent = TouchEvent;
type NativePointerEvent = PointerEvent;
type NativeTransitionEvent = TransitionEvent;
type NativeUIEvent = UIEvent;
type NativeWheelEvent = WheelEvent;

interface AbstractView {
  styleMedia: StyleMedia;
  document: Document;
}

//
// Event System
// ----------------------------------------------------------------------
// E = EventObject, C = e.currentTarget, T = e.target
interface BaseEvent<E = unknown, C = unknown, T = unknown> {
  nativeEvent: Event & E;
  currentTarget: C & EventTarget;
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
  type: string & NativeEventTypes;
}

/**
 * currentTarget - a reference to the element on which the event listener is registered.
 *
 * target - a reference to the element from which the event was originally dispatched.
 * This might be a child element to the element on which the event listener is registered.
 * If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682
 */
type NativeEvent<T = PossibleEventTarget, E = Event> = BaseEvent<E, EventTarget & T, EventTarget>;

interface ClipboardEvent<T = Element> extends NativeEvent<T, NativeClipboardEvent> {
  clipboardData?: DataTransfer;
}

interface CompositionEvent<T = Element> extends NativeEvent<T, NativeCompositionEvent> {
  data: string;
}

interface DragEvent<T = Element> extends MouseEvent<T, NativeDragEvent> {
  dataTransfer: DataTransfer;
}

interface PointerEvent<T = Element> extends MouseEvent<T, NativePointerEvent> {
  pointerId: number;
  pressure: number;
  tangentialPressure: number;
  tiltX: number;
  tiltY: number;
  twist: number;
  width: number;
  height: number;
  pointerType: 'mouse' | 'pen' | 'touch';
  isPrimary: boolean;
}

interface FocusEvent<T = Element, R = Element> extends NativeEvent<T, NativeFocusEvent> {
  relatedTarget: (EventTarget & R) | null;
  target: EventTarget & T;
}

type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type FormEvent<T = FormControl> = NativeEvent<T>;

interface ChangeEvent<T = FormControl> extends FormEvent<T> {
  target: EventTarget & T;
}

export type ModifierKey =
  | 'Alt'
  | 'AltGraph'
  | 'CapsLock'
  | 'Control'
  | 'Fn'
  | 'FnLock'
  | 'Hyper'
  | 'Meta'
  | 'NumLock'
  | 'ScrollLock'
  | 'Shift'
  | 'Super'
  | 'Symbol'
  | 'SymbolLock';

interface KeyboardEvent<T = Element> extends UIEvent<T, NativeKeyboardEvent> {
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

interface MouseEvent<T = Element, E = NativeMouseEvent> extends UIEvent<T, E> {
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

interface TouchEvent<T = Element> extends UIEvent<T, NativeTouchEvent> {
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

interface UIEvent<T = Element, E = NativeUIEvent> extends NativeEvent<T, E> {
  detail: number;
  view: AbstractView;
}

interface WheelEvent<T = Element> extends MouseEvent<T, NativeWheelEvent> {
  deltaMode: number;
  deltaX: number;
  deltaY: number;
  deltaZ: number;
}

interface AnimationEvent<T = Element> extends NativeEvent<T, NativeAnimationEvent> {
  animationName: string;
  elapsedTime: number;
  pseudoElement: string;
}

interface TransitionEvent<T = Element> extends NativeEvent<T, NativeTransitionEvent> {
  elapsedTime: number;
  propertyName: string;
  pseudoElement: string;
}

//
// Event Handler Types
// ----------------------------------------------------------------------
type EventHandler<E extends NativeEvent<unknown, unknown>> = //   (this: unknown & EventTarget, event: E): void;
  (event: E) => void;
type NativeEventHandler<T = Element> = EventHandler<NativeEvent<T>>;
type ClipboardEventHandler<T = Element> = EventHandler<ClipboardEvent<T>>;
type CompositionEventHandler<T = Element> = EventHandler<CompositionEvent<T>>;
type DragEventHandler<T = Element> = EventHandler<DragEvent<T>>;
type FocusEventHandler<T = Element> = EventHandler<FocusEvent<T>>;
type FormEventHandler<T = Element> = EventHandler<FormEvent<T>>;
type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;
type KeyboardEventHandler<T = Element> = EventHandler<KeyboardEvent<T>>;
type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
type TouchEventHandler<T = Element> = EventHandler<TouchEvent<T>>;
type PointerEventHandler<T = Element> = EventHandler<PointerEvent<T>>;
type UIEventHandler<T = Element> = EventHandler<UIEvent<T>>;
type WheelEventHandler<T = Element> = EventHandler<WheelEvent<T>>;
type AnimationEventHandler<T = Element> = EventHandler<AnimationEvent<T>>;
type TransitionEventHandler<T = Element> = EventHandler<TransitionEvent<T>>;

type SupportedEventObject<T> =
  | NativeEvent<T>
  | ClipboardEvent<T>
  | CompositionEvent<T>
  | DragEvent<T>
  | FocusEvent<T>
  | FormEvent<T>
  | ChangeEvent<T>
  | KeyboardEvent<T>
  | MouseEvent<T>
  | TouchEvent<T>
  | PointerEvent<T>
  | UIEvent<T>
  | WheelEvent<T>
  | AnimationEvent<T>
  | TransitionEvent<T>;

type SupportedEventHandler<T> =
  | NativeEventHandler<T>
  | ClipboardEventHandler<T>
  | CompositionEventHandler<T>
  | DragEventHandler<T>
  | FocusEventHandler<T>
  | FormEventHandler<T>
  | ChangeEventHandler<T>
  | KeyboardEventHandler<T>
  | MouseEventHandler<T>
  | TouchEventHandler<T>
  | PointerEventHandler<T>
  | UIEventHandler<T>
  | WheelEventHandler<T>
  | AnimationEventHandler<T>
  | TransitionEventHandler<T>;

type NativeEventTypes =
  | 'DOMContentLoaded'
  | 'DOMMouseScroll'
  | 'abort'
  | 'beforeunload'
  | 'blur'
  | 'change'
  | 'click'
  | 'contextmenu'
  | 'dblclick'
  | 'error'
  | 'focus'
  | 'focusin'
  | 'focusout'
  | 'gesturechange'
  | 'gestureend'
  | 'gesturestart'
  | 'hover'
  | 'keydown'
  | 'keypress'
  | 'keyup'
  | 'load'
  | 'mousedown'
  | 'mouseenter'
  | 'mousein'
  | 'mouseleave'
  | 'mousemove'
  | 'mouseout'
  | 'mouseover'
  | 'mouseup'
  | 'mousewheel'
  | 'move'
  | 'orientationchange'
  | 'pointercancel'
  | 'pointerdown'
  | 'pointerleave'
  | 'pointermove'
  | 'pointerup'
  | 'readystatechange'
  | 'reset'
  | 'resize'
  | 'scroll'
  | 'select'
  | 'selectend'
  | 'selectstart'
  | 'submit'
  | 'touchcancel'
  | 'touchend'
  | 'touchmove'
  | 'touchstart'
  | 'unload';
type PossibleEventTarget = EventTarget & (Element | Document | Window);

export {
  SupportedEventObject,
  SupportedEventHandler,
  EventHandler,
  NativeEventTypes,
  NativeEvent,
  ClipboardEvent,
  CompositionEvent,
  DragEvent,
  FocusEvent,
  FormEvent,
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  TouchEvent,
  PointerEvent,
  UIEvent,
  WheelEvent,
  AnimationEvent,
  TransitionEvent,
  NativeEventHandler,
  ClipboardEventHandler,
  CompositionEventHandler,
  DragEventHandler,
  FocusEventHandler,
  FormEventHandler,
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  TouchEventHandler,
  PointerEventHandler,
  UIEventHandler,
  WheelEventHandler,
  AnimationEventHandler,
  TransitionEventHandler,
  PossibleEventTarget,
};

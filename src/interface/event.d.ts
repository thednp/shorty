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
interface BaseEvent<E = Event, C = unknown, T = unknown> {
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
 * currentTarget - a reference to the element on which the event listener is registered.
 *
 * target - a reference to the element from which the event was originally dispatched.
 * This might be a child element to the element on which the event listener is registered.
 * If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682
 */
type NativeEvent<T = Element, E = Event> = BaseEvent<E, T, T>;

interface ClipboardEvent<T = Element> extends NativeEvent<T, NativeClipboardEvent> {
  clipboardData: DataTransfer;
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

type ModifierKey =
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
// (this: unknown & EventTarget, event: E): void;
type EventHandler<T = Element, E = Event | NativeEvent<T>> = (event: E) => void;
type NativeEventHandler<T = Element> = EventHandler<T, NativeEvent<T>>;
type ClipboardEventHandler<T = Element> = EventHandler<T, ClipboardEvent<T>>;
type CompositionEventHandler<T = Element> = EventHandler<T, CompositionEvent<T>>;
type DragEventHandler<T = Element> = EventHandler<T, DragEvent<T>>;
type FocusEventHandler<T = Element> = EventHandler<T, FocusEvent<T>>;
type FormEventHandler<T = Element> = EventHandler<T, FormEvent<T>>;
type ChangeEventHandler<T = Element> = EventHandler<T, ChangeEvent<T>>;
type KeyboardEventHandler<T = Element> = EventHandler<T, KeyboardEvent<T>>;
type MouseEventHandler<T = Element> = EventHandler<T, MouseEvent<T>>;
type TouchEventHandler<T = Element> = EventHandler<T, TouchEvent<T>>;
type PointerEventHandler<T = Element> = EventHandler<T, PointerEvent<T>>;
type UIEventHandler<T = Element> = EventHandler<T, UIEvent<T>>;
type WheelEventHandler<T = Element> = EventHandler<T, WheelEvent<T>>;
type AnimationEventHandler<T = Element> = EventHandler<T, AnimationEvent<T>>;
type TransitionEventHandler<T = Element> = EventHandler<T, TransitionEvent<T>>;
type PossibleEventTarget = EventTarget & (Element | Document | Window);

export {
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

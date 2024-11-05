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
type NativeEvent<T extends EventTarget = HTMLElement, E = Event> = BaseEvent<
  E,
  T,
  T
>;

interface ClipboardEvent<T extends EventTarget = HTMLElement>
  extends NativeEvent<T, NativeClipboardEvent> {
  clipboardData: DataTransfer;
}

interface CompositionEvent<T extends EventTarget = HTMLElement>
  extends NativeEvent<T, NativeCompositionEvent> {
  data: string;
}

interface DragEvent<T extends EventTarget = HTMLElement>
  extends MouseEvent<T, NativeDragEvent> {
  dataTransfer: DataTransfer;
}

interface PointerEvent<T extends EventTarget = HTMLElement>
  extends MouseEvent<T, NativePointerEvent> {
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

interface FocusEvent<
  T extends EventTarget = HTMLElement,
  R extends Element = HTMLElement,
> extends NativeEvent<T, NativeFocusEvent> {
  relatedTarget: (EventTarget & R) | null;
  target: EventTarget & T;
}

type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type FormEvent<T = FormControl> = NativeEvent<T>;

interface ChangeEvent<T extends EventTarget = FormControl>
  extends FormEvent<T> {
  target: EventTarget & T;
}

type ModifierKey =
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

interface KeyboardEvent<T extends EventTarget = HTMLElement>
  extends UIEvent<T, NativeKeyboardEvent> {
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

interface MouseEvent<T extends EventTarget = HTMLElement, E = NativeMouseEvent>
  extends UIEvent<T, E> {
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

interface TouchEvent<T extends EventTarget = HTMLElement>
  extends UIEvent<T, NativeTouchEvent> {
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

interface UIEvent<T extends EventTarget = HTMLElement, E = NativeUIEvent>
  extends NativeEvent<T, E> {
  detail: number;
  view: AbstractView;
}

interface WheelEvent<T extends EventTarget = HTMLElement>
  extends MouseEvent<T, NativeWheelEvent> {
  deltaMode: number;
  deltaX: number;
  deltaY: number;
  deltaZ: number;
}

interface AnimationEvent<T extends EventTarget = HTMLElement>
  extends NativeEvent<T, NativeAnimationEvent> {
  animationName: string;
  elapsedTime: number;
  pseudoElement: string;
}

interface TransitionEvent<T extends EventTarget = HTMLElement>
  extends NativeEvent<T, NativeTransitionEvent> {
  elapsedTime: number;
  propertyName: string;
  pseudoElement: string;
}

//
// Event Handler Types
// ----------------------------------------------------------------------
// (this: unknown & EventTarget, event: E): void;
type EventHandler<
  T extends EventTarget = HTMLElement,
  E = Event | NativeEvent<T>,
> = (event: E) => void;
type NativeEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
  T,
  NativeEvent<T>
>;
type ClipboardEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
  T,
  ClipboardEvent<T>
>;
type CompositionEventHandler<T extends EventTarget = HTMLElement> =
  EventHandler<
    T,
    CompositionEvent<T>
  >;
type DragEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
  T,
  DragEvent<T>
>;
type FocusEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
  T,
  FocusEvent<T>
>;
type FormEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
  T,
  FormEvent<T>
>;
type ChangeEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
  T,
  ChangeEvent<T>
>;
type KeyboardEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
  T,
  KeyboardEvent<T>
>;
type MouseEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
  T,
  MouseEvent<T>
>;
type TouchEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
  T,
  TouchEvent<T>
>;
type PointerEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
  T,
  PointerEvent<T>
>;
type UIEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
  T,
  UIEvent<T>
>;
type WheelEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
  T,
  WheelEvent<T>
>;
type AnimationEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
  T,
  AnimationEvent<T>
>;
type TransitionEventHandler<T extends EventTarget = HTMLElement> = EventHandler<
  T,
  TransitionEvent<T>
>;
type PossibleEventTarget = EventTarget & (Element | Document | Window);

export {
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
};

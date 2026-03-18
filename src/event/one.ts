import on from "./on.ts";
import off from "./off.ts";
import { NativeEventHandler } from "../interface/event.d.ts";

/**
 * Add an `eventListener` to an `EventTarget`
 * element and remove it once callback is called.
 */
const one = <T extends EventTarget, L = EventListener>(
  element: T,
  eventName: string,
  listener: L,
  options?: AddEventListenerOptions,
) => {
  /** Wrap the listener for easy on -> off */
  const handlerWrapper: NativeEventHandler<T> = (e) => {
    /* istanbul ignore else @preserve */
    if (e.target === element || e.currentTarget === element) {
      (listener as NativeEventHandler<T>).apply(element, [e]);
      off(element, eventName, handlerWrapper, options);
    }
  };
  on(element, eventName, handlerWrapper, options);
};

export default one;

import {
  EventHandler,
  NativeEvent,
  NativeEventTypes,
  PossibleEventTarget,
  SupportedEventHandler,
} from '../interface/event';

import on from './on';
import off from './off';

/**
 * Add an `eventListener` to an `EventTarget`
 * element and remove it once callback is called.
 */
const one = <T extends PossibleEventTarget>(
  element: T,
  eventName: NativeEventTypes,
  listener: SupportedEventHandler<T>,
  options?: AddEventListenerOptions,
) => {
  /** Wrap the listener for easy on -> off */
  const handlerWrapper = (e: NativeEvent): void => {
    /* istanbul ignore else */
    if (e.target === element || e.currentTarget === element) {
      (listener as EventHandler<typeof e>).apply(element, [e]);
      off(
        element,
        eventName,
        handlerWrapper as unknown as EventListenerObject & SupportedEventHandler<T>,
        options,
      );
    }
  };
  on(
    element,
    eventName,
    handlerWrapper as unknown as EventListenerObject & SupportedEventHandler<T>,
    options,
  );
};

export default one;

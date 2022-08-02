import isMap from '../is/isMap';
import isHTMLElement from '../is/isHTMLElement';
import isNumber from '../is/isNumber';

type KeyMap = Map<string, number>;
type TimeMap = Map<HTMLElement, number | KeyMap>;

const TimeCache: TimeMap = new Map();
/**
 * An interface for one or more `TimerHandler`s per `Element`.
 * @see https://github.com/thednp/navbar/
 */
const Timer = {
  /**
   * Sets a new timeout timer for an element, or element -> key association.
   * @param element target element
   * @param callback the callback
   * @param delay the execution delay
   * @param key a unique key
   */
  set: (element: HTMLElement, callback: TimerHandler, delay: number, key?: string): void => {
    if (!isHTMLElement(element)) return;

    /* istanbul ignore else */
    if (key && key.length) {
      /* istanbul ignore else */
      if (!TimeCache.has(element)) {
        TimeCache.set(element, new Map());
      }
      (TimeCache.get(element) as KeyMap).set(key, setTimeout(callback, delay));
    } else {
      TimeCache.set(element, setTimeout(callback, delay));
    }
  },

  /**
   * Returns the timer associated with the target.
   * @param element target element
   * @param key a unique
   * @returns the timer
   */
  get: (element: HTMLElement, key?: string): number | null => {
    if (!isHTMLElement(element)) return null;
    const keyTimers = TimeCache.get(element);

    if (isMap(keyTimers)) {
      return keyTimers.get(key) || /* istanbul ignore next */ null;
    } else if (isNumber(keyTimers)) {
      return keyTimers;
    }
    return null;
  },

  /**
   * Clears the element's timer.
   * @param element target element
   * @param key a unique key
   */
  clear: (element: HTMLElement, key?: string): void => {
    if (!isHTMLElement(element)) return;

    const keyTimers = TimeCache.get(element);

    if (key && key.length && isMap(keyTimers)) {
      /* istanbul ignore else */
      if (isMap(keyTimers)) {
        clearTimeout(keyTimers.get(key));
        keyTimers.delete(key);
        /* istanbul ignore else */
        if (keyTimers.size === 0) {
          TimeCache.delete(element);
        }
      }
    } else {
      clearTimeout(keyTimers as number);
      TimeCache.delete(element);
    }
  },
};

export default Timer;

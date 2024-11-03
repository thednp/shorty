import isMap from "../is/isMap";
import isElement from "../is/isElement";
import isNumber from "../is/isNumber";

type KeyMap = Map<string, number>;
type TimeMap = Map<Element, number | KeyMap>;

const TimeCache: TimeMap = new Map() as TimeMap;
/**
 * An interface for one or more `TimerHandler`s per `Element`.
 *
 * @see https://github.com/thednp/navbar/
 */
const Timer = {
  /**
   * Sets a new timeout timer for an element, or element -> key association.
   *
   * @param element target element
   * @param callback the callback
   * @param delay the execution delay
   * @param key a unique key
   */
  set: (
    element: Element,
    callback: TimerHandler,
    delay: number,
    key?: string,
  ): void => {
    if (!isElement(element)) return;

    // @legal test  comment
    // @license test  comment
    /* @legal comment */
    /* @license comment */
    /* test @legal comment */
    /* test @license comment */

    /* istanbul ignore else @preserve */
    if (key && key.length) {
      /* istanbul ignore else @preserve */
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
   *
   * @param element target element
   * @param key a unique
   * @returns the timer
   */
  get: (element: Element, key?: string): number | null => {
    if (!isElement(element)) return null;
    const keyTimers = TimeCache.get(element);

    if (key && keyTimers && isMap(keyTimers as KeyMap)) {
      return (keyTimers as KeyMap).get(key) ||
        /* istanbul ignore next @preserve */
        null;
    } else if (isNumber(keyTimers as number)) {
      return keyTimers as number;
    }
    return null;
  },

  /**
   * Clears the element's timer.
   *
   * @param element target element
   * @param key a unique key
   */
  clear: (element: Element, key?: string): void => {
    if (!isElement(element)) return;

    const keyTimers = TimeCache.get(element);

    if (key && key.length && isMap(keyTimers as KeyMap)) {
      clearTimeout((keyTimers as KeyMap).get(key));
      (keyTimers as KeyMap).delete(key);
      /* istanbul ignore else @preserve */
      if ((keyTimers as KeyMap).size === 0) {
        TimeCache.delete(element);
      }
    } else {
      clearTimeout(keyTimers as number);
      TimeCache.delete(element);
    }
  },
};

export default Timer;

import isHTMLElement from "../is/isHTMLElement";

const TimeCache = new Map();
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
  set: (element: HTMLElement, callback: ReturnType<any>, delay: number, key?: string) => {
    if (!isHTMLElement(element)) return;

    /* istanbul ignore else */
    if (key && key.length) {
      /* istanbul ignore else */
      if (!TimeCache.has(element)) {
        TimeCache.set(element, new Map());
      }
      const keyTimers = TimeCache.get(element);
      keyTimers.set(key, setTimeout(callback, delay));
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
  get: (element: HTMLElement, key?: string) => {
    if (!isHTMLElement(element)) return null;
    const keyTimers = TimeCache.get(element);

    if (key && key.length && keyTimers && keyTimers.get) {
      return keyTimers.get(key) || /* istanbul ignore next */ null;
    }
    return keyTimers || null;
  },

  /**
   * Clears the element's timer.
   * @param element target element
   * @param key a unique key
   */
  clear: (element: HTMLElement, key: string) => {
    if (!isHTMLElement(element)) return;

    if (key && key.length) {
      const keyTimers = TimeCache.get(element);
      /* istanbul ignore else */
      if (keyTimers && keyTimers.get) {
        clearTimeout(keyTimers.get(key));
        keyTimers.delete(key);
        /* istanbul ignore else */
        if (keyTimers.size === 0) {
          TimeCache.delete(element);
        }
      }
    } else {
      clearTimeout(TimeCache.get(element));
      TimeCache.delete(element);
    }
  },
};

export default Timer;

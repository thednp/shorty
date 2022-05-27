import isHTMLElement from '../is/isHTMLElement';

/** @type {Map<HTMLElement, any>} */
const TimeCache = new Map();
/**
 * An interface for one or more `TimerHandler`s per `Element`.
 * @see https://github.com/thednp/navbar.js/
 */
const Timer = {
  /**
   * Sets a new timeout timer for an element, or element -> key association.
   * @param {HTMLElement} element target element
   * @param {ReturnType<TimerHandler>} callback the callback
   * @param {number} delay the execution delay
   * @param {string=} key a unique key
   */
  set: (element, callback, delay, key) => {
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
   * @param {HTMLElement} element target element
   * @param {string=} key a unique
   * @returns {number?} the timer
   */
  get: (element, key) => {
    if (!isHTMLElement(element)) return null;
    const keyTimers = TimeCache.get(element);

    if (key && key.length && keyTimers && keyTimers.get) {
      return keyTimers.get(key) || /* istanbul ignore next */null;
    }
    return keyTimers || null;
  },

  /**
   * Clears the element's timer.
   * @param {HTMLElement} element target element
   * @param {string=} key a unique key
   */
  clear: (element, key) => {
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

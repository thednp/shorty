import querySelector from '../selectors/querySelector';

/** @type {Map<HTMLElement | Element, any>} */
const TimeCache = new Map();
/**
 * An interface for one or more `TimerHandler`s per `Element`.
 * @see https://github.com/thednp/navbar.js/
 */
const Timer = {
  /**
   * Sets a new timeout timer for an element, or element -> key association.
   * @param {HTMLElement | Element | string} target target element
   * @param {ReturnType<TimerHandler>} callback the callback
   * @param {number} delay the execution delay
   * @param {string=} key a unique
   */
  set: (target, callback, delay, key) => {
    const element = querySelector(target);

    if (!element) return;

    if (key && key.length) {
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
   * @param {HTMLElement | Element | string} target target element
   * @param {string=} key a unique
   * @returns {number?} the timer
   */
  get: (target, key) => {
    const element = querySelector(target);

    if (!element) return null;
    const keyTimers = TimeCache.get(element);

    if (key && key.length && keyTimers && keyTimers.get) {
      return keyTimers.get(key) || null;
    }
    return keyTimers || null;
  },

  /**
   * Clears the element's timer.
   * @param {HTMLElement | Element | string} target target element
   * @param {string=} key a unique key
   */
  clear: (target, key) => {
    const element = querySelector(target);

    if (!element) return;

    if (key && key.length) {
      const keyTimers = TimeCache.get(element);

      if (keyTimers && keyTimers.get) {
        clearTimeout(keyTimers.get(key));
        keyTimers.delete(key);
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

import querySelector from '../selectors/querySelector';

/** @type {Map<SHORTER.ElementNodes, any>} */
const TimeCache = new Map();
/**
 * An interface for one or more `TimerHandler`s per `Element`.
 * @see https://github.com/thednp/navbar.js/
 */
const Timer = {
  /**
   * Sets a new timeout timer for an element, or element -> key association.
   * @param {SHORTER.ElementNodes | string} target target element
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
   * @param {SHORTER.ElementNodes | string} target target element
   * @param {string=} key a unique
   * @returns {ReturnType<TimerHandler>?} the timer
   */
  get: (target, key) => {
    const element = querySelector(target);

    if (!element) return null;

    if (key && key.length) {
      if (!TimeCache.has(element)) {
        TimeCache.set(element, new Map());
      }
      const keyTimers = TimeCache.get(element);
      if (keyTimers.has(key)) {
        return keyTimers.get(key);
      }
    } else if (TimeCache.has(element)) {
      return TimeCache.get(element);
    }
    return null;
  },

  /**
   * Clears the element's timer.
   * @param {SHORTER.ElementNodes | string} target target element
   * @param {string=} key a unique key
   */
  clear: (target, key) => {
    const element = querySelector(target);
    const timers = element && TimeCache.get(element);

    if (!timers) return;

    if (key && key.length) {
      if (timers.has(key)) {
        clearTimeout(timers.get(key));
        timers.delete(key);
      }
    } else {
      clearTimeout(timers);
      TimeCache.delete(element);
    }
  },
};

export default Timer;

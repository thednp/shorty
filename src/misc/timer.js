import isElement from './isElement';
import querySelector from './querySelector';

const TimeCache = new Map();

const Timer = {
  /**
   * Sets a new timeout timer for an element, or element -> key association.
   * @param {Element | string} target target element
   * @param {ReturnType<TimerHandler>} callback the callback
   * @param {number} delay the execution delay
   * @param {string=} key a unique
   */
  set: (target, callback, delay, key) => {
    const element = querySelector(target);
    if (!isElement(element)) return;

    if (typeof key === 'string' && key.length) {
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
   * @param {Element | string} target target element
   * @param {string=} key a unique
   * @returns {Map<Element, TimerHandler>?} the timer
   */
  get: (target, key) => {
    const element = querySelector(target);
    if (!isElement(element)) return null;

    if (typeof key === 'string' && key.length) {
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
   * @param {Element} target target element
   * @param {string=} key a unique
   */
  clear: (target, key) => {
    const element = querySelector(target);

    if (!isElement(element) || !TimeCache.has(element)) return;

    if (typeof key === 'string' && key.length) {
      const keyTimers = TimeCache.get(element);

      if (keyTimers && keyTimers.has(key)) {
        clearTimeout(keyTimers.get(key));
        keyTimers.delete(key);
      }
    } else if (TimeCache.has(element)) {
      clearTimeout(TimeCache.get(element));
      TimeCache.delete(element);
    }
  },
};

export default Timer;

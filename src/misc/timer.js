import isHTMLElement from './isHTMLElement';
import querySelector from './querySelector';

const TimeCache = new Map();
/**
 * An interface for one or more `TimerHandler`s per `Element`.
 * @see https://github.com/thednp/navbar.js/
 */
const Timer = {
  /**
   * Sets a new timeout timer for an element, or element -> key association.
   * @param {HTMLElement | string} target target element
   * @param {ReturnType<TimerHandler>} callback the callback
   * @param {number} delay the execution delay
   * @param {string=} key a unique
   */
  set: (target, callback, delay, key) => {
    const element = querySelector(target);

    if (!isHTMLElement(element)) return;

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
   * @param {HTMLElement | string} target target element
   * @param {string=} key a unique
   * @returns {Map<Element, TimerHandler>?} the timer
   */
  get: (target, key) => {
    const element = querySelector(target);

    if (!isHTMLElement(element)) return null;

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
   * @param {HTMLElement} target target element
   * @param {string=} key a unique
   */
  clear: (target, key) => {
    const element = querySelector(target);

    if (!isHTMLElement(element) || !TimeCache.has(element)) return;

    if (key && key.length) {
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

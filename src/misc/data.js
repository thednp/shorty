import querySelector from './querySelector';
import isHTMLElement from './isHTMLElement';

const componentData = new Map();
/**
 * An interface for web components background data.
 * @see https://github.com/thednp/bootstrap.native/blob/master/src/components/base-component.js
 */
const Data = {
  /**
   * Sets web components data.
   * @param {HTMLElement | string} target target element
   * @param {string} component the component's name or a unique key
   * @param {any} instance the component instance
   */
  set: (target, component, instance) => {
    const element = querySelector(target);
    if (!isHTMLElement(element)) return;

    if (!componentData.has(component)) {
      componentData.set(component, new Map());
    }

    const instanceMap = componentData.get(component);
    instanceMap.set(element, instance);
  },

  /**
   * Returns all instances for specified component.
   * @param {string} component the component's name or a unique key
   * @returns {any?} all the component instances
   */
  getAllFor: (component) => {
    if (componentData.has(component)) {
      return componentData.get(component);
    }
    return null;
  },

  /**
   * Returns the instance associated with the target.
   * @param {HTMLElement | string} target target element
   * @param {string} component the component's name or a unique key
   * @returns {any?} the instance
   */
  get: (target, component) => {
    const element = querySelector(target);

    const allForC = Data.getAllFor(component);
    if (allForC && isHTMLElement(element) && allForC.has(element)) {
      return allForC.get(element);
    }
    return null;
  },

  /**
   * Removes web components data.
   * @param {HTMLElement | string} target target element
   * @param {string} component the component's name or a unique key
   */
  remove: (target, component) => {
    const element = querySelector(target);
    if (!componentData.has(component) || !element) return;

    const instanceMap = componentData.get(component);
    instanceMap.delete(element);

    if (instanceMap.size === 0) {
      componentData.delete(component);
    }
  },
};

/**
 * An alias for `Data.get()`.
 * @param {HTMLElement | string} target target element
 * @param {string} component the component's name or a unique key
 * @returns {Record<string, any>?} the request result
 */
export const getInstance = (target, component) => Data.get(target, component);

export default Data;

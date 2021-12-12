const componentData = new Map();
/**
 * An interface for web components background data.
 * @see https://github.com/thednp/bootstrap.native/blob/master/src/components/base-component.js
 */
const Data = {
  /**
   * Sets web components data.
   * @param {Element} element target element
   * @param {string} component the component's name or a unique key
   * @param {any} instance the component instance
   */
  set: (element, component, instance) => {
    if (!componentData.has(component)) {
      componentData.set(component, new Map());
    }

    const instanceMap = componentData.get(component);
    instanceMap.set(element, instance);
  },

  /**
   * Returns all instances for specified component.
   * @param {string} component the component's name or a unique key
   * @returns {?any} all the component instances
   */
  getAllFor: (component) => {
    if (componentData.has(component)) {
      return componentData.get(component) || null;
    }
    return null;
  },

  /**
   * Returns the instance associated with the target.
   * @param {Element} element target element
   * @param {string} component the component's name or a unique key
   * @returns {?any} the instance
   */
  get: (element, component) => {
    const allForC = Data.getAllFor(component);
    if (allForC && allForC.has(element)) {
      return allForC.get(element) || null;
    }
    return null;
  },

  /**
   * Removes web components data.
   * @param {Element} element target element
   * @param {string} component the component's name or a unique key
   * @param {any} instance the component instance
   */
  remove: (element, component) => {
    if (!componentData.has(component)) return;

    const instanceMap = componentData.get(component);
    instanceMap.delete(element);

    if (instanceMap.size === 0) {
      componentData.delete(component);
    }
  },
};

/**
 * Shortcut for `Data.get(a, b)` to setup usable component static method.
 * @type {SHORTER.getInstance<SHORTER.Component, string>}
 */
export const getInstance = (element, component) => Data.get(element, component);

export default Data;

import isElement from "../is/isElement";

const componentData = new Map<string, Map<Element, unknown>>();

/**
 * An interface for web components background data.
 *
 * @see https://github.com/thednp/bootstrap.native/blob/master/src/components/base-component.js
 */
const Data = {
  data: componentData,
  /**
   * Sets web components data.
   *
   * @param element target element
   * @param component the component's name or a unique key
   * @param instance the component instance
   */
  set: <T>(element: Element, component: string, instance: T): void => {
    if (!isElement(element)) return;

    /* istanbul ignore else @preserve */
    if (!componentData.has(component)) {
      componentData.set(component, new Map<Element, T>());
    }

    const instanceMap = componentData.get(component) as Map<Element, T>;
    // not undefined, but defined right above
    instanceMap.set(element, instance);
  },

  /**
   * Returns all instances for specified component.
   *
   * @param component the component's name or a unique key
   * @returns all the component instances
   */
  getAllFor: <T>(component: string): Map<Element, T> | null => {
    const instanceMap = componentData.get(component) as Map<Element, T>;

    return instanceMap || null;
  },

  /**
   * Returns the instance associated with the target.
   *
   * @param element target element
   * @param component the component's name or a unique key
   * @returns the instance
   */
  get: <T>(element: Element, component: string): T | null => {
    if (!isElement(element) || !component) return null;
    const instanceMap = Data.getAllFor<T>(component);

    const instance = element && instanceMap && instanceMap.get(element);

    return instance || null;
  },

  /**
   * Removes web components data.
   *
   * @param element target element
   * @param component the component's name or a unique key
   */
  remove: <T>(element: Element, component: string): void => {
    const instanceMap = Data.getAllFor<T>(component);

    if (!instanceMap || !isElement(element)) return;

    instanceMap.delete(element);

    /* istanbul ignore else @preserve */
    if (instanceMap.size === 0) {
      componentData.delete(component);
    }
  },
};

export default Data;

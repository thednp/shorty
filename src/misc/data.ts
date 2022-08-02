import isHTMLElement from '../is/isHTMLElement';

type ComponentData = Record<string, any>;
type ElementComponentMap = Map<HTMLElement, ComponentData>;
type ComponentDataMap = Map<string, ElementComponentMap>;

const componentData: ComponentDataMap = new Map();

/**
 * An interface for web components background data.
 * @see https://github.com/thednp/bootstrap.native/blob/master/src/components/base-component.js
 */
const Data = {
  /**
   * Sets web components data.
   * @param element target element
   * @param component the component's name or a unique key
   * @param instance the component instance
   */
  set: <T>(element: HTMLElement, component: string, instance: T): void => {
    if (!isHTMLElement(element)) return;

    /* istanbul ignore else */
    if (!componentData.has(component)) {
      componentData.set(component, new Map());
    }

    const instanceMap = componentData.get(component);
    // not undefined, but defined right above
    (instanceMap as ElementComponentMap).set(element, instance);
  },

  /**
   * Returns all instances for specified component.
   * @param component the component's name or a unique key
   * @returns all the component instances
   */
  getAllFor: (component: string): ElementComponentMap | null => {
    const instanceMap = componentData.get(component);

    return instanceMap || null;
  },

  /**
   * Returns the instance associated with the target.
   * @param element target element
   * @param component the component's name or a unique key
   * @returns the instance
   */
  get: <T>(element: HTMLElement, component: string): T | null => {
    if (!isHTMLElement(element) || !component) return null;
    const instanceMap = Data.getAllFor(component);
    const instance = element && instanceMap && instanceMap.get(element);

    return (instance as T) || null;
  },

  /**
   * Removes web components data.
   * @param element target element
   * @param component the component's name or a unique key
   */
  remove: (element: HTMLElement, component: string): void => {
    const instanceMap = Data.getAllFor(component);
    if (!instanceMap || !isHTMLElement(element)) return;

    instanceMap.delete(element);

    /* istanbul ignore else */
    if (instanceMap.size === 0) {
      componentData.delete(component);
    }
  },
};

/**
 * An alias for `Data.get()`.
 */
export const getInstance = <T>(target: HTMLElement, component: string): T | null =>
  Data.get<T>(target, component);

export default Data;

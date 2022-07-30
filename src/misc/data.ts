import isHTMLElement from "../is/isHTMLElement";

type ComponentDataMap = Map<string, Map<HTMLElement, Record<string, any>>>;

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
  set: (element: HTMLElement, component: string, instance: Record<string, any>): void => {
    if (!isHTMLElement(element)) return;

    /* istanbul ignore else */
    if (!componentData.has(component)) {
      componentData.set(component, new Map());
    }

    const instanceMap = componentData.get(component);
    // not undefined, but defined right above
    instanceMap.set(element, instance);
  },

  /**
   * Returns all instances for specified component.
   * @param component the component's name or a unique key
   * @returns {} all the component instances
   */
  getAllFor: (component: string): Map<HTMLElement, Record<string, any>> | null => {
    const instanceMap = componentData.get(component);

    return instanceMap || null;
  },

  /**
   * Returns the instance associated with the target.
   * @param element target element
   * @param component the component's name or a unique key
   * @returns the instance
   */
  get: (element: HTMLElement, component: string): Record<string, any> | null => {
    if (!isHTMLElement(element) || !component) return null;
    const allForC = Data.getAllFor(component);
    const instance = element && allForC && allForC.get(element);

    return instance || null;
  },

  /**
   * Removes web components data.
   * @param element target element
   * @param component the component's name or a unique key
   */
  remove: (element: HTMLElement, component: string): void => {
    const instanceMap = componentData.get(component);
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
export const getInstance = (target: HTMLElement, component: string) => Data.get(target, component);

export default Data;

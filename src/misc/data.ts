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
  set: <T extends ComponentData>(element: HTMLElement, component: string, instance: T): void => {
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
  get: (element: HTMLElement, component: string): ComponentData | null => {
    if (!isHTMLElement(element) || !component) return null;
    const instanceMap = Data.getAllFor(component);
    const instance = element && instanceMap && instanceMap.get(element);

    return instance || null;
  },

  /**
   * Removes web components data.
   * @param element target element
   * @param component the component's name or a unique key
   */
  remove: <S extends string, E extends HTMLElement>(element: E, component: S): void => {
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
export const getInstance = (target: HTMLElement, component: string) => Data.get(target, component);

export default Data;

import isHTMLElement from '../is/isHTMLElement';

type MConstructor<T extends new (...args: any[]) => any> = new (
  ...args: ConstructorParameters<T>
) => InstanceType<T>;

const componentData = new Map<MConstructor<any>, Map<HTMLElement, InstanceType<any>>>();

/**
 * An interface for web components background data.
 *
 * @see https://github.com/thednp/bootstrap.native/blob/master/src/components/base-component.js
 */
const Data = {
  /**
   * Sets web components data.
   *
   * @param element target element
   * @param component the component's name or a unique key
   * @param instance the component instance
   */
  set: <T extends MConstructor<T>>(
    element: HTMLElement,
    component: T,
    instance: InstanceType<T>,
  ): void => {
    if (!isHTMLElement(element)) return;

    /* istanbul ignore else */
    if (!componentData.has(component)) {
      componentData.set(component, new Map<HTMLElement, InstanceType<T>>());
    }

    const instanceMap = componentData.get(component) as Map<HTMLElement, InstanceType<T>>;
    // not undefined, but defined right above
    instanceMap.set(element, instance);
  },

  /**
   * Returns all instances for specified component.
   *
   * @param component the component's name or a unique key
   * @returns all the component instances
   */
  getAllFor: <T extends MConstructor<T>>(
    component: T,
  ): Map<HTMLElement, InstanceType<T>> | null => {
    const instanceMap = componentData.get(component) as Map<HTMLElement, InstanceType<T>>;

    return instanceMap || null;
  },

  /**
   * Returns the instance associated with the target.
   *
   * @param element target element
   * @param component the component's name or a unique key
   * @returns the instance
   */
  get: <T extends MConstructor<T>>(element: HTMLElement, component: T): InstanceType<T> | null => {
    if (!isHTMLElement(element) || !component) return null;
    const instanceMap = Data.getAllFor<T>(component);
    const instance = element && instanceMap && instanceMap.get(element);

    // return (instance as T) || null;
    return instance || null;
  },

  /**
   * Removes web components data.
   *
   * @param element target element
   * @param component the component's name or a unique key
   */
  remove: <T extends MConstructor<T>>(element: HTMLElement, component: T): void => {
    const instanceMap = Data.getAllFor<T>(component);
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
export const getInstance = <T extends MConstructor<T>>(
  target: HTMLElement,
  component: T,
): InstanceType<T> | null => Data.get<T>(target, component);

export default Data;

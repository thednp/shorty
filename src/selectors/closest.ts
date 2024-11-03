/**
 * Shortcut for `HTMLElement.closest` method which also works
 * with children of `ShadowRoot`. The order of the parameters
 * is intentional since they're both required.
 *
 * @see https://stackoverflow.com/q/54520554/803358
 *
 * @param element target Element to check
 * @param selector the selector string
 * @return the query result
 */
const closest = <T extends Element>(
  element: T,
  selector: string,
): T | null => {
  if (!element || !selector) return null;

  return element.closest<T>(selector) ||
    // break out of `ShadowRoot`
    closest((element.getRootNode() as ShadowRoot).host as T, selector) || null;
};

export default closest;

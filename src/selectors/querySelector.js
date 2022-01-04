/**
 * Utility to check if target is typeof `HTMLElement`, `Element`, `Node`
 * or find one that matches a selector.
 *
 * @param {HTMLElement | string} selector the input selector or target element
 * @param {(Node | Element | HTMLElement)=} parent optional node to look into
 * @return {HTMLElement?} the `HTMLElement` or `querySelector` result
 */
export default function querySelector(selector, parent) {
  const nodeTypes = [HTMLElement, Element, Node];
  const lookUp = parent && nodeTypes.some((x) => parent instanceof x) ? parent : document;

  return nodeTypes.some((x) => selector instanceof x)
    // @ts-ignore -- we must include ShadowRoot Node
    ? selector : lookUp.querySelector(selector);
}

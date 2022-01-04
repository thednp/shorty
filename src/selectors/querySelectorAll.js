/**
 * A shortcut for `(document|Element).querySelectorAll`.
 *
 * @param {string} selector the input selector
 * @param {(Node | Element | HTMLElement)=} parent optional node to look into
 * @return {NodeListOf<HTMLElement>} the query result
 */
export default function querySelectorAll(selector, parent) {
  const lookUp = parent && [HTMLElement, Element, Node]
    .some((x) => parent instanceof x) ? parent : document;
  // @ts-ignore -- we must include ShadowRoot Node
  return lookUp.querySelectorAll(selector);
}

import getDocument from "../get/getDocument";
import isNode from "../is/isNode";

/**
 * Shortcut for `Element.getElementsByClassName` method. Some `Node` elements
 * like `ShadowRoot` do not support `getElementsByClassName`.
 *
 * @param selector the class name
 * @param parent optional Element to look into
 * @return the 'HTMLCollection'
 */
const getElementsByClassName = <T extends Element>(
  selector: string,
  parent?: ParentNode,
) => {
  const lookUp = parent && isNode(parent) ? parent : getDocument();
  return (lookUp as Element | Document).getElementsByClassName(
    selector,
  ) as HTMLCollectionOf<T>;
};

export default getElementsByClassName;

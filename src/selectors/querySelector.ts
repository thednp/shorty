import getDocument from "../get/getDocument";
import isElement from "../is/isElement";

/**
 * Utility to check if target is typeof `Element`, `Node`
 * or find one that matches a selector.
 *
 * @param selector the input selector or target element
 * @param parent optional node to look into
 * @return the `Element` or null
 */
const querySelector = <T extends Element>(
  selector: T | string,
  parent?: ParentNode,
) => {
  if (isElement(selector)) {
    return selector as T;
  }
  const lookUp = isElement(parent) ? parent : getDocument();

  return lookUp.querySelector<T>(selector as string);
};

export default querySelector;

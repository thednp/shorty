import getDocument from "../get/getDocument";
import isNode from "../is/isNode";

/**
 * A shortcut for `(document|Element).querySelectorAll`.
 *
 * @param selector the input selector
 * @param parent optional node to look into
 * @return the query result
 */
const querySelectorAll = <T extends HTMLElement>(
  selector: string,
  parent?: ParentNode,
): NodeListOf<T> => {
  const lookUp = isNode(parent) ? parent : getDocument();
  return lookUp.querySelectorAll(selector);
};

export default querySelectorAll;

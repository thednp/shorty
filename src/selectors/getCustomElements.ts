import isCustomElement from "../is/isCustomElement";
import getElementsByTagName from "./getElementsByTagName";

/**
 * Returns an `Array` of `Node` elements that are registered as
 * `CustomElement`.
 *
 * @see https://stackoverflow.com/questions/27334365/how-to-get-list-of-registered-custom-elements
 *
 * @param parent parent to look into
 * @returns the query result
 */
const getCustomElements = (parent?: ParentNode) => {
  const collection = getElementsByTagName("*", parent);

  return [...collection].filter(isCustomElement);
};

export default getCustomElements;

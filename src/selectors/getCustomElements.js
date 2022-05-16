import isCustomElement from '../is/isCustomElement';
import getElementsByTagName from './getElementsByTagName';

/**
 * Returns an `Array` of `Node` elements that are registered as
 * `CustomElement`.
 * @see https://stackoverflow.com/questions/27334365/how-to-get-list-of-registered-custom-elements
 *
 * @param {ParentNode=} parent parent to look into
 * @returns {Array<HTMLElement>} the query result
 */
export default function getCustomElements(parent) {
  const collection = getElementsByTagName('*', parent);

  return [...collection].filter(isCustomElement);
}

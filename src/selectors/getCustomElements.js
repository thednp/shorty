import documentAll from './documentAll';
import isCustomElement from '../is/isCustomElement';
import parentNodes from './parentNodes';
import getElementsByTagName from './getElementsByTagName';

/**
 * Returns an `Array` of `Node` elements that are registered as
 * `CustomElement`.
 * @see https://stackoverflow.com/questions/27334365/how-to-get-list-of-registered-custom-elements
 *
 * @param {(HTMLElement | Element | Node | Document)=} parent parent to look into
 * @returns {(HTMLElement | Element)[]} the query result
 */
export default function getCustomElements(parent) {
  const collection = parent && parentNodes.some((x) => parent instanceof x)
    // @ts-ignore -- look inside `shadowRoot` node too
    ? getElementsByTagName('*', parent) : documentAll;
  return [...collection].filter(isCustomElement);
}

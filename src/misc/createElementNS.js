import getDocument from '../get/getDocument';
import ObjectEntries from './ObjectEntries';
import setAttribute from '../attr/setAttribute';

/**
 * This is a shortie for `document.createElementNS` method
 * which allows you to create a new `HTMLElement` for a given `tagName`
 * or based on an object with specific non-readonly attributes:
 * `id`, `className`, `textContent`, `style`, etc.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS
 *
 * @param {string} namespace `namespaceURI` to associate with the new `HTMLElement`
 * @param {Record<string, string> | string} param `tagName` or object
 * @return {HTMLElement} a new `HTMLElement` or `Element`
 */
export default function createElementNS(namespace, param) {
  if (!namespace && !param) return null;
  if (typeof param === 'string') {
    return getDocument().createElementNS(namespace, param);
  }

  const { tagName } = param;
  const attr = { ...param };
  const newElement = createElementNS(namespace, tagName);
  delete attr.tagName;
  ObjectEntries(attr).forEach(([key, value]) => {
    setAttribute(newElement, key, value);
  });
  return newElement;
}

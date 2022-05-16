import getDocument from '../get/getDocument';

/**
 * Returns an `Element` that matches the id in the document.
 * Within multiple <iframe> elements, a `parent` parameter
 * would decisively locate the correct element.
 *
 * @param {string} id
 * @param {ParentNode=} parent
 * @returns {(HTMLElement | Element)?}
 */
export default function getElementById(id, parent) {
  return getDocument(parent).getElementById(id);
}

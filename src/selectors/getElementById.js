import getDocument from '../get/getDocument';

/**
 * Returns an `Element` that matches the id in the document.
 * Within multiple <iframe> elements, a `parent` parameter
 * would decisively locate the correct element.
 *
 * @param {string} id
 * @param {ParentNode=} context
 * @returns {HTMLElement?}
 */
export default function getElementById(id, context) {
  return getDocument(context).getElementById(id);
}

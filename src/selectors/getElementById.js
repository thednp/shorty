import getDocument from '../get/getDocument';

/**
 * Returns an `Element` that matches the id in the document.
 *
 * @param {string} id
 * @returns {(HTMLElement | Element)?}
 */
export default function getElementById(id) {
  return getDocument().getElementById(id);
}

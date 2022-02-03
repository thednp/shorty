let elementUID = 1;
const elementIDMap = new Map();

/**
 * Returns a unique identifier for popover, tooltip, scrollspy.
 *
 * @param {HTMLElement | Element} element target element
 * @param {string=} key predefined key
 * @returns {number} an existing or new unique ID
 */
export default function getUID(element, key) {
  elementUID += 1;
  let elMap = elementIDMap.get(element);
  let result = elementUID;

  if (key && key.length) {
    if (elMap) {
      const elMapId = elMap.get(key);
      if (!Number.isNaN(elMapId)) {
        result = elMapId;
      } else {
        elMap.set(key, result);
      }
    } else {
      elementIDMap.set(element, new Map());
      elMap = elementIDMap.get(element);
      elMap.set(key, result);
    }
  } else if (!Number.isNaN(elMap)) {
    result = elMap;
  } else {
    elementIDMap.set(element, result);
  }
  return result;
}

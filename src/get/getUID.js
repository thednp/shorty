let elementUID = 0;
let elementMapUID = 0;
const elementIDMap = new Map();

/**
 * Returns a unique identifier for popover, tooltip, scrollspy.
 *
 * @param {HTMLElement} element target element
 * @param {string=} key predefined key
 * @returns {number} an existing or new unique ID
 */
export default function getUID(element, key) {
  let result = key ? elementUID : elementMapUID;

  if (key) {
    const elID = getUID(element);
    const elMap = elementIDMap.get(elID) || new Map();
    if (!elementIDMap.has(elID)) {
      elementIDMap.set(elID, elMap);
    }
    if (!elMap.has(key)) {
      elMap.set(key, result);
      elementUID += 1;
    } else result = elMap.get(key);
  } else {
    const elkey = element.id || element;

    if (!elementIDMap.has(elkey)) {
      elementIDMap.set(elkey, result);
      elementMapUID += 1;
    } else result = elementIDMap.get(elkey);
  }
  return result;
}

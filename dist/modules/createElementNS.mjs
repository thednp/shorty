import getDocument from './getDocument.mjs';
import ObjectEntries from './ObjectEntries.mjs';
import setAttribute from './setAttribute.mjs';
import isString from './isString.mjs';
import './isNode.mjs';
import './isObject.mjs';
import './isWindow.mjs';
import './isDocument.mjs';

const createElementNS = (ns, param) => {
  if (!ns || !param)
    return void 0;
  if (isString(param)) {
    return getDocument().createElementNS(ns, param);
  }
  const { tagName } = param;
  const newElement = createElementNS(ns, tagName);
  if (!newElement)
    return void 0;
  const attr = { ...param };
  delete attr.tagName;
  ObjectEntries(attr).forEach(([key, value]) => {
    if (isString(key) && isString(value)) {
      setAttribute(newElement, key, value);
    }
  });
  return newElement;
};

export { createElementNS as default };
//# sourceMappingURL=createElementNS.mjs.map

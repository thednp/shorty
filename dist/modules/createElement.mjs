import isString from './isString.mjs';
import setAttribute from './setAttribute.mjs';
import getDocument from './getDocument.mjs';
import ObjectEntries from './ObjectEntries.mjs';
import './isNode.mjs';
import './isObject.mjs';
import './isWindow.mjs';
import './isDocument.mjs';

const createElement = (param) => {
  if (!param)
    return void 0;
  if (isString(param)) {
    return getDocument().createElement(param);
  }
  const { tagName } = param;
  const newElement = createElement(tagName);
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

export { createElement as default };
//# sourceMappingURL=createElement.mjs.map

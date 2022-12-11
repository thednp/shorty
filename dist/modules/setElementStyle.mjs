import ObjectAssign from './ObjectAssign.mjs';
import ObjectEntries from './ObjectEntries.mjs';
import isString from './isString.mjs';

const setElementStyle = (element, styles) => {
  ObjectEntries(styles).forEach(([key, value]) => {
    if (value && isString(key) && key.includes("--")) {
      element.style.setProperty(key, value);
    } else {
      const propObject = {};
      propObject[key] = value;
      ObjectAssign(element.style, propObject);
    }
  });
};

export { setElementStyle as default };
//# sourceMappingURL=setElementStyle.mjs.map

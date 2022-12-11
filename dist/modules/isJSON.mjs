import isString from './isString.mjs';

const isJSON = (str) => {
  if (!isString(str))
    return false;
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export { isJSON as default };
//# sourceMappingURL=isJSON.mjs.map

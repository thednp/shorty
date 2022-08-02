import isString from './isString';
const isJSON = (str) => {
    if (!isString(str))
        return false;
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
};
export default isJSON;
//# sourceMappingURL=isJSON.js.map
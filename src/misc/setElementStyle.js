import ObjectAssign from './ObjectAssign';
import ObjectEntries from './ObjectEntries';
const setElementStyle = (element, styles) => {
    ObjectEntries(styles).forEach(([key, value]) => {
        if (key.includes('--')) {
            element.style.setProperty(key, value);
        }
        else {
            const propObject = {};
            propObject[key] = value;
            ObjectAssign(element.style, propObject);
        }
    });
};
export default setElementStyle;
//# sourceMappingURL=setElementStyle.js.map
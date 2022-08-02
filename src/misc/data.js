import isHTMLElement from '../is/isHTMLElement';
const componentData = new Map();
const Data = {
    set: (element, component, instance) => {
        if (!isHTMLElement(element))
            return;
        if (!componentData.has(component)) {
            componentData.set(component, new Map());
        }
        const instanceMap = componentData.get(component);
        instanceMap.set(element, instance);
    },
    getAllFor: (component) => {
        const instanceMap = componentData.get(component);
        return instanceMap || null;
    },
    get: (element, component) => {
        if (!isHTMLElement(element) || !component)
            return null;
        const instanceMap = Data.getAllFor(component);
        const instance = element && instanceMap && instanceMap.get(element);
        return instance || null;
    },
    remove: (element, component) => {
        const instanceMap = Data.getAllFor(component);
        if (!instanceMap || !isHTMLElement(element))
            return;
        instanceMap.delete(element);
        if (instanceMap.size === 0) {
            componentData.delete(component);
        }
    },
};
export const getInstance = (target, component) => Data.get(target, component);
export default Data;
//# sourceMappingURL=data.js.map
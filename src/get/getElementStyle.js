const getElementStyle = (element, property) => {
    const computedStyle = getComputedStyle(element);
    return property.includes("--")
        ? computedStyle.getPropertyValue(property)
        : computedStyle[property];
};
export default getElementStyle;
//# sourceMappingURL=getElementStyle.js.map
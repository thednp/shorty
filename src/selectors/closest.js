const closest = (element, selector) => {
    return element
        ? element.closest(selector) ||
            closest(element.getRootNode().host, selector)
        : null;
};
export default closest;
//# sourceMappingURL=closest.js.map
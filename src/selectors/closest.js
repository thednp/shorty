/**
 * Shortcut for `HTMLElement.closest` method which also works
 * with children of `ShadowRoot`. The order of the parameters
 * is intentional since they're both required.
 *
 * @see https://stackoverflow.com/q/54520554/803358
 *
 * @param element Element to look into
 * @param selector the selector name
 * @return the query result
 */
const closest = (element, selector) => {
    return element
        ? element.closest(selector) ||
            // break out of `ShadowRoot`
            closest(element.getRootNode().host, selector)
        : null;
};
export default closest;
//# sourceMappingURL=closest.js.map
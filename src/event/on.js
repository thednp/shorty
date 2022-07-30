export default function on(element, eventName, listener, options) {
    const ops = options || false;
    element.addEventListener(eventName, listener, ops);
}
//# sourceMappingURL=on.js.map
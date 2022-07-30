export default function off(element, eventName, listener, options) {
    const ops = options || false;
    element.removeEventListener(eventName, listener, ops);
}
//# sourceMappingURL=off.js.map
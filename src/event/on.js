export default function on(element, eventName, listener, options) {
    const ops = options || false;
    element.addEventListener(eventName, listener, ops);
}

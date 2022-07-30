import on from "./on";
import off from "./off";
const one = (element, eventName, listener, options) => {
    const handlerWrapper = (e) => {
        if (e.target === element) {
            listener.apply(element, [e]);
            off(element, eventName, handlerWrapper, options);
        }
    };
    on(element, eventName, handlerWrapper, options);
};
export default one;
//# sourceMappingURL=one.js.map
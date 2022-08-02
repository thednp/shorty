import DOMContentLoadedEvent from "../strings/DOMContentLoadedEvent";
import one from "../event/one";
const supportPassive = (() => {
    let result = false;
    try {
        const opts = Object.defineProperty({}, "passive", {
            get() {
                result = true;
                return result;
            },
        });
        one(document, DOMContentLoadedEvent, () => { }, opts);
    }
    catch (e) {
    }
    return result;
})();
export default supportPassive;

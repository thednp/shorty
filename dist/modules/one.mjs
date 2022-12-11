import on from './on.mjs';
import off from './off.mjs';

const one = (element, eventName, listener, options) => {
  const handlerWrapper = (e) => {
    if (e.target === element || e.currentTarget === element) {
      listener.apply(element, [e]);
      off(element, eventName, handlerWrapper, options);
    }
  };
  on(element, eventName, handlerWrapper, options);
};

export { one as default };
//# sourceMappingURL=one.mjs.map

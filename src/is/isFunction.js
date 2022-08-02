const isFunction = (fn) => (fn && fn.constructor.name === "Function") || false;
export default isFunction;

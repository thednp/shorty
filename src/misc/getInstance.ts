import Data from "./data";

/**
 * An alias for `Data.get()`.
 */
const getInstance = <T>(target: Element, component: string): T | null =>
  Data.get(target, component);

export default getInstance;

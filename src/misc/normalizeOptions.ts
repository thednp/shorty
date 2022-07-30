import getAttribute from "../attr/getAttribute";
import normalizeValue from "./normalizeValue";
import ObjectKeys from "./ObjectKeys";
import toLowerCase from "./toLowerCase";

/**
 * Utility to normalize component options.
 *
 * @param element target
 * @param defaultOps component default options
 * @param inputOps component instance options
 * @param ns component namespace
 * @return normalized component options object
 */
const normalizeOptions = (
  element: HTMLElement,
  defaultOps: Record<string, any>,
  inputOps: Record<string, any>,
  ns?: string
) => {
  const data = { ...element.dataset };
  const normalOps: Record<string, any> = {};
  const dataOps: Record<string, any> = {};
  const title = "title";

  ObjectKeys(data).forEach((k) => {
    const key =
      ns && k.includes(ns) ? k.replace(ns, "").replace(/[A-Z]/, (match) => toLowerCase(match)) : k;

    dataOps[key] = normalizeValue(data[k]);
  });

  ObjectKeys(inputOps).forEach((k) => {
    inputOps[k] = normalizeValue(inputOps[k]);
  });

  ObjectKeys(defaultOps).forEach((k) => {
    /* istanbul ignore else */
    if (k in inputOps) {
      normalOps[k] = inputOps[k];
    } else if (k in dataOps) {
      normalOps[k] = dataOps[k];
    } else {
      normalOps[k] = k === title ? getAttribute(element, title) : defaultOps[k];
    }
  });

  return normalOps;
};

export default normalizeOptions;

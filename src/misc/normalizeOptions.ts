import isElement from "../is/isElement";
import getAttribute from "../attr/getAttribute";
import normalizeValue from "./normalizeValue";
import ObjectEntries from "./ObjectEntries";
import camelCase from "./camelCase";

/**
 * Utility to normalize component options.
 *
 * @param element target
 * @param defaultOps component default options
 * @param inputOps component instance options
 * @param ns component namespace
 * @return normalized component options object
 */
const normalizeOptions = <T extends { [key: string]: unknown }>(
  element: Element,
  defaultOps: T,
  inputOps: Partial<T>,
  ns?: string,
): T => {
  /* istanbul ignore next @preserve */
  if (!isElement(element)) return defaultOps;

  const INPUT = { ...inputOps } as T;
  // typescript is not sure if Element.dataset is supported
  const data = { ...(element as HTMLElement).dataset };
  const normalOps = { ...defaultOps };
  const dataOps: Partial<T> = {};
  const title = "title";

  ObjectEntries(data).forEach(([k, v]) => {
    const key: keyof T = ns && typeof k === "string" && k.includes(ns)
      ? camelCase(k.replace(ns, ""))
      : /* istanbul ignore next @preserve */ camelCase(k as string);

    dataOps[key] = normalizeValue(v) as T[keyof T];
  });

  ObjectEntries(INPUT).forEach(([k, v]) => {
    INPUT[k] = normalizeValue(v) as T[keyof T];
  });

  ObjectEntries(defaultOps).forEach(([k, v]) => {
    /* istanbul ignore else @preserve */
    if (k in INPUT) {
      normalOps[k] = INPUT[k] as T[keyof T];
    } else if (k in dataOps) {
      normalOps[k] = dataOps[k] as T[keyof T];
    } else {
      normalOps[k] =
        (k === title ? getAttribute(element, title) : v) as T[keyof T];
    }
  });

  return normalOps;
};

export default normalizeOptions;

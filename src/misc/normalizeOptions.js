import normalizeValue from './normalizeValue';
import ObjectKeys from './ObjectKeys';

/**
 * Utility to normalize component options
 *
 * @param {Element} element target
 * @param {Record<string, any>} defaultOps component default options
 * @param {Record<string, any>} inputOps component instance options
 * @param {string=} ns component namespace
 * @return {Record<string, any>} normalized component options object
 */
export default function normalizeOptions(element, defaultOps, inputOps, ns) {
  // @ts-ignore -- usually our `Element` is `HTMLElement` as well
  const data = { ...element.dataset };
  const normalOps = {};
  const dataOps = {};

  ObjectKeys(data).forEach((k) => {
    const key = ns && k.includes(ns)
      ? k.replace(ns, '').replace(/[A-Z]/, (match) => match.toLowerCase())
      : k;

    dataOps[key] = normalizeValue(data[k]);
  });

  ObjectKeys(inputOps).forEach((k) => {
    inputOps[k] = normalizeValue(inputOps[k]);
  });

  ObjectKeys(defaultOps).forEach((k) => {
    if (k in inputOps) {
      normalOps[k] = inputOps[k];
    } else if (k in dataOps) {
      normalOps[k] = dataOps[k];
    } else {
      normalOps[k] = defaultOps[k];
    }
  });

  return normalOps;
}

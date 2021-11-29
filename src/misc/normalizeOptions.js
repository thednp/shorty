import normalizeValue from './normalizeValue';

/**
 * Utility to normalize component options
 *
 * @param {Element} element target
 * @param {object} defaultOps component default options
 * @param {object} inputOps component instance options
 * @param {string} ns component namespace
 * @return {object} normalized component options object
 */
export default function normalizeOptions(element, defaultOps, inputOps, ns) {
  const { ...dataset } = element;
  const normalOps = {};
  const dataOps = {};

  Object.keys(dataset)
    .forEach((k) => {
      const key = k.includes(ns)
        ? k.replace(ns, '').replace(/[A-Z]/, (match) => match.toLowerCase())
        : k;

      dataOps[key] = normalizeValue(dataset[k]);
    });

  Object.keys(inputOps)
    .forEach((k) => {
      inputOps[k] = normalizeValue(inputOps[k]);
    });

  Object.keys(defaultOps)
    .forEach((k) => {
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

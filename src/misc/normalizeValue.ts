import { Fn } from "../interface/fn";

type NormalValue = boolean | number | string | Fn | null;

/**
 * Utility to normalize component options
 *
 * @param value the input value
 * @return the normalized value
 */
const normalizeValue = (value?: unknown): NormalValue => {
  if (["true", true].includes(value as boolean)) {
    return true;
  }

  if (["false", false].includes(value as boolean)) {
    return false;
  }

  if (["null", "", null, undefined].includes(value as string | undefined)) {
    return null;
  }

  if (value !== "" && !Number.isNaN(+(value as string))) {
    return +(value as string);
  }

  // string / function / Element / object / undefined
  return value as NormalValue;
};

export default normalizeValue;

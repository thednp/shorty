import { optionValues } from '../types';

/**
 * Utility to normalize component options
 *
 * @param value the input value
 * @return the normalized value
 */
const normalizeValue = (value?: any): optionValues => {
  if (['true', true].includes(value)) {
    return true;
  }

  if (['false', false].includes(value)) {
    return false;
  }

  if (['null', '', null].includes(value)) {
    return null;
  }

  if (value !== '' && !Number.isNaN(+value)) {
    return +value;
  }

  // string / function / HTMLElement / object / undefined
  return value;
};

export default normalizeValue;

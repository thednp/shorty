/**
 * Transform a string to camel case.
 * @param input source string
 */
const camelCase = (input: string) =>
  input?.trim().replace(
    /(?:^\w|[A-Z]|\b\w)/g,
    (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase(),
  ).replace(/\s+/g, "");

export default camelCase;

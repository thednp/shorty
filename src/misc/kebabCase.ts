/**
 * Transform a string to kebab case.
 * @param input source string
 */
const kebabCase = (input: string) =>
  input?.trim().replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();

export default kebabCase;

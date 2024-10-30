/**
 * Capitalize first character in a string.
 * @param input source string
 */
const capitalize = (input: string) =>
  input?.charAt(0).toUpperCase() + input?.slice(1);

export default capitalize;

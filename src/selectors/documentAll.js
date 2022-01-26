import getElementsByTagName from './getElementsByTagName';

/**
 * An `HTMLCollection` with all document elements,
 * which is the equivalent to `document.all`.
 */
const documentAll = getElementsByTagName('*');
export default documentAll;

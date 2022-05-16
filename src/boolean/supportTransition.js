import documentHead from '../blocks/documentHead';

/**
 * A global `boolean` for CSS3 transition support.
 * @type {boolean}
 */
const supportTransition = 'webkitTransition' in documentHead.style
  || /* istanbul ignore next */'transition' in documentHead.style;
export default supportTransition;

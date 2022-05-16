import documentHead from '../blocks/documentHead';

/**
 * A global `boolean` for CSS3 animation support.
 * @type {boolean}
 */
const supportAnimation = 'webkitAnimation' in documentHead.style
  || /* istanbul ignore next */'animation' in documentHead.style;
export default supportAnimation;

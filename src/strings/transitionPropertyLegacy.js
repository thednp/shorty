import documentHead from '../blocks/documentHead';

/**
 * A global namespace for:
 * * `transitionProperty` string for modern brosers,
 * * `webkitTransition` for legacy Chrome / Safari browsers
 *
 * @type {string}
 */
const transitionProperty = 'webkitTransition' in documentHead.style ? 'webkitTransitionProperty' : 'transitionProperty';

export default transitionProperty;

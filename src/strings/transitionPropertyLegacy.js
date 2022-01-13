import documentHead from '../blocks/documentHead';

/**
 * A global namespace for:
 * * `transitionProperty` string for Firefox,
 * * `webkitTransition` for older Chrome / Safari browsers,
 * * `transition` property for all other browsers.
 * @type {string}
 */
const transitionProperty = 'webkitTransition' in documentHead.style ? 'webkitTransitionProperty' : 'transitionProperty';

export default transitionProperty;

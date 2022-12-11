import documentHead from './documentHead.mjs';

const supportAnimation = ["webkitAnimation", "animation"].some((p) => p in documentHead.style);

export { supportAnimation as default };
//# sourceMappingURL=supportAnimation.mjs.map

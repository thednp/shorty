import documentHead from './documentHead.mjs';

const supportTransition = ["webkitTransition", "transition"].some((p) => p in documentHead.style);

export { supportTransition as default };
//# sourceMappingURL=supportTransition.mjs.map

import documentHead from './documentHead.mjs';

const supportTransform = ["webkitTransform", "transform"].some((p) => p in documentHead.style);

export { supportTransform as default };
//# sourceMappingURL=supportTransform.mjs.map

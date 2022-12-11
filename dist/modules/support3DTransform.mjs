import documentHead from './documentHead.mjs';

const support3DTransform = ["webkitPerspective", "perspective"].some((p) => p in documentHead.style);

export { support3DTransform as default };
//# sourceMappingURL=support3DTransform.mjs.map

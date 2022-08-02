import documentHead from "../blocks/documentHead";
const support3DTransform = ["webkitPerspective", "perspective"].some((p) => p in documentHead.style);
export default support3DTransform;

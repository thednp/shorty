import documentHead from "../blocks/documentHead";
const supportTransform = ["webkitTransform", "transform"].some((p) => p in documentHead.style);
export default supportTransform;

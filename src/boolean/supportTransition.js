import documentHead from "../blocks/documentHead";
const supportTransition = ["webkitTransition", "transition"].some((p) => p in documentHead.style);
export default supportTransition;

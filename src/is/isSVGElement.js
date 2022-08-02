const isSVGElement = (element) => (element && element.constructor.name.includes("SVG")) || false;
export default isSVGElement;

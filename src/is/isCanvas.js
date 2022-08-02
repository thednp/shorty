const isCanvas = (element) => (element && element.constructor.name === "HTMLCanvasElement") || false;
export default isCanvas;

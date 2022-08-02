const isWindow = (obj) => (obj && obj.constructor.name === "Window") || false;
export default isWindow;

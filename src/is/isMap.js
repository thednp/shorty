const isMap = (obj) => (obj && obj.constructor.name === 'Map') || false;
export default isMap;

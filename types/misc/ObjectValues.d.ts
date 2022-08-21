declare const ObjectValues: <O extends {}>(obj: O) => O[keyof O][];
export default ObjectValues;

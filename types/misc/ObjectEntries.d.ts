declare const ObjectEntries: <O extends {}>(obj: O) => [keyof O, O[keyof O]][];
export default ObjectEntries;

declare const ObjectValues: <O extends Record<string, unknown>>(obj: O) => O[keyof O][];

export {
	ObjectValues as default,
};

export {};

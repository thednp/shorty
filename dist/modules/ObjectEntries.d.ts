declare const ObjectEntries: <O extends Record<string, any>>(obj: O) => [
	keyof O,
	O[keyof O]
][];

export {
	ObjectEntries as default,
};

export {};

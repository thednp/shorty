declare const ObjectHasOwn: <T extends object, K extends PropertyKey>(obj: T, prop: K) => obj is T & Record<K, unknown>;

export {
	ObjectHasOwn as default,
};

export {};

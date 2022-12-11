declare const normalizeOptions: <T extends {
	[key: string]: any;
}>(element: HTMLElement, defaultOps: T, inputOps: Partial<T>, ns?: string) => T;

export {
	normalizeOptions as default,
};

export {};

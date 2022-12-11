export type NormalValue = boolean | number | string | ((...args: any[]) => any) | null;
declare const normalizeValue: (value?: boolean | number | string) => NormalValue;

export {
	normalizeValue as default,
};

export {};

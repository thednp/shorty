export type Component = Record<string, any>;
export type getInstance<T> = (target: HTMLElement | string, component: string) => T | null;

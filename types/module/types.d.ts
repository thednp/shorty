export type Component = Record<string, any>;
export type getInstance<T extends Component> = (target: HTMLElement | string, component: string) => T | null;

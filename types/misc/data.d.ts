declare type ComponentData = Record<string, any>;
declare type ElementComponentMap = Map<HTMLElement, ComponentData>;
declare const Data: {
    set: <T>(element: HTMLElement, component: string, instance: T) => void;
    getAllFor: (component: string) => ElementComponentMap | null;
    get: <T_1>(element: HTMLElement, component: string) => T_1;
    remove: (element: HTMLElement, component: string) => void;
};
export declare const getInstance: <T>(target: HTMLElement, component: string) => T;
export default Data;

declare type ComponentData = Record<string, any>;
declare type ElementComponentMap = Map<HTMLElement, ComponentData>;
declare const Data: {
    set: <T extends ComponentData>(element: HTMLElement, component: string, instance: T) => void;
    getAllFor: (component: string) => ElementComponentMap | null;
    get: (element: HTMLElement, component: string) => ComponentData | null;
    remove: <S extends string, E extends HTMLElement>(element: E, component: S) => void;
};
export declare const getInstance: (target: HTMLElement, component: string) => ComponentData;
export default Data;

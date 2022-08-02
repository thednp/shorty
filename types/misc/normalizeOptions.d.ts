import { optionValues } from '../types';
declare const normalizeOptions: <T extends {
    [key: string]: optionValues;
}>(element: HTMLElement, defaultOps: T, inputOps: Partial<T>, ns?: string) => T;
export default normalizeOptions;

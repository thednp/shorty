declare const Timer: {
    set: (element: HTMLElement, callback: TimerHandler, delay: number, key?: string) => void;
    get: (element: HTMLElement, key?: string) => number | null;
    clear: (element: HTMLElement, key?: string) => void;
};
export default Timer;

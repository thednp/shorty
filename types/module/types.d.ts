export type Component = Record<string, any>;
export type getInstance<T> = (target: HTMLElement | string, component: string) => T | null;

export interface BoundingClientRect {
  width: number,
  height: number,
  top: number,
  left: number,
  right: number,
  bottom: number,
  x: number,
  y: number,
}

export interface OffsetRect {
  width: number,
  height: number,
  x: number,
  y: number,
}
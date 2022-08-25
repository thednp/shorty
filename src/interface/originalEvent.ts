export interface OriginalEvent<T> extends CustomEvent<T> {
  relatedTarget?: EventTarget;
}

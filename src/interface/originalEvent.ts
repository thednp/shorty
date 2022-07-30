export default interface OriginalEvent extends CustomEvent {
  relatedTarget?: EventTarget;
}

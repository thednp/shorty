import ariaHidden from "../strings/ariaHidden";
import focusableSelector from "../strings/focusableSelector";
import querySelectorAll from "../selectors/querySelectorAll";
import getAttribute from "../attr/getAttribute";
import hasAttribute from "../attr/hasAttribute";
import off from "../event/off";
import on from "../event/on";
import getDocument from "../get/getDocument";
import { KeyboardEvent } from "../interface/event";

const focusTrapMap = new Map<Element, boolean>();

export type FocusableElement =
  | HTMLAnchorElement
  | HTMLButtonElement
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLDataListElement
  | HTMLDetailsElement
  | HTMLSelectElement;

function handleKeyboardNavigation<T extends Element & EventTarget>(
  this: T,
  event: KeyboardEvent<T>,
) {
  const { shiftKey, code } = event;
  const doc = getDocument(this);
  const focusableElements = [
    ...querySelectorAll<FocusableElement>(focusableSelector, this),
  ].filter(
    (el) => !hasAttribute(el, "disabled") && !getAttribute(el, ariaHidden),
  );

  if (!focusableElements.length) return;
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  /* istanbul ignore else @preserve */
  if (code === "Tab") {
    if (shiftKey && doc.activeElement === firstFocusable) {
      lastFocusable.focus();
      event.preventDefault();
    } else if (!shiftKey && doc.activeElement === lastFocusable) {
      firstFocusable.focus();
      event.preventDefault();
    }
  }
}

/**
 * Utility to check if a designated element is affected by focus trap;
 * @param target
 */
export const hasFocusTrap = (target: Element) =>
  focusTrapMap.has(target) === true;

/**
 * Utility to toggle focus trap inside a designated target element;
 * @param target
 */
export const toggleFocusTrap = (target: Element) => {
  const isCurrentlyTrapped = hasFocusTrap(target);
  const action = !isCurrentlyTrapped ? on : off;
  action(target, "keydown", handleKeyboardNavigation);
  if (isCurrentlyTrapped) focusTrapMap.delete(target);
  else focusTrapMap.set(target, true);
};

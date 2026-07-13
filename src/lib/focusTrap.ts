/**
 * Minimaler Fokus-Falle-Helfer für Dialoge/Panels. Hält Tab/Shift+Tab
 * innerhalb des übergebenen Containers, solange `active()` true liefert.
 */
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function trapFocus(container: HTMLElement, event: KeyboardEvent): void {
  if (event.key !== 'Tab') return;

  const focusable = Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (el) => el.offsetParent !== null,
  );
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const activeElement = document.activeElement;

  if (event.shiftKey) {
    if (activeElement === first || !container.contains(activeElement)) {
      event.preventDefault();
      last.focus();
    }
  } else {
    if (activeElement === last || !container.contains(activeElement)) {
      event.preventDefault();
      first.focus();
    }
  }
}

export function focusFirst(container: HTMLElement): void {
  const focusable = container.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
  focusable?.focus();
}

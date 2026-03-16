// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null;
  readonly rootMargin: string;
  readonly thresholds: ReadonlyArray<number>;
  private readonly callback: IntersectionObserverCallback;

  constructor(
    callback: IntersectionObserverCallback,
    options: IntersectionObserverInit = {},
  ) {
    this.callback = callback;
    this.root = options.root ?? null;
    this.rootMargin = options.rootMargin ?? "";
    this.thresholds = Array.isArray(options.threshold)
      ? options.threshold
      : typeof options.threshold === "number"
        ? [options.threshold]
        : [0];
  }

  disconnect(): void {}

  observe(target: Element): void {
    const maybeTarget = target as Element & {
      getBoundingClientRect?: () => DOMRectReadOnly;
    };

    const entry: IntersectionObserverEntry = {
      time: Date.now(),
      target,
      rootBounds: null,
      boundingClientRect:
        maybeTarget.getBoundingClientRect?.() ?? ({} as DOMRectReadOnly),
      intersectionRect: {} as DOMRectReadOnly,
      isIntersecting: true,
      intersectionRatio: 1,
    };

    this.callback([entry], this);
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  unobserve(_target: Element): void {}
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

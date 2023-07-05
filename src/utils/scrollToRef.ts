import type { RefObject } from 'react';

/**
 * Scrolls the window to the top of the element referenced by the given ref object.
 *
 * @param ref - A RefObject that references the element to scroll to.
 *
 * @returns void.
 */
const scrollToRef = (ref: RefObject<HTMLDivElement>): void => {
  if (ref.current) {
    const rect = ref.current.getBoundingClientRect();
    /** the size of the header is added so that the message is visible */
    window.scrollTo({
      top: rect.top + window.pageYOffset - 90,
      behavior: 'smooth',
    });
  }
};

export default scrollToRef;

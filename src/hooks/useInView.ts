import { useEffect, useState, useRef, RefObject } from 'react';

interface Options {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: Options = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);
        if (inView && triggerOnce) {
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}

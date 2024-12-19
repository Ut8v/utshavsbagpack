import { useState, useEffect, useRef } from 'react';
//Not currently used anywhere in the project. But I have it incase I want to have controll over the pages that are being rendered.
function Scroller({ root, rootMargin, threshold }: IntersectionObserverInit): [React.MutableRefObject<HTMLDivElement | null>, boolean] {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { root, rootMargin, threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [root, rootMargin, threshold]);

  return [containerRef, isVisible];
}

export default Scroller;



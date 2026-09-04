// src/hooks/useInView.js
import { useEffect, useRef, useState } from "react";

/**
 * Detecta quando um elemento entra na viewport.
 * Usado para animações de "fade/slide in" ao rolar a página.
 */
export default function useInView({ threshold = 0.2, once = true } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return [ref, isInView];
}
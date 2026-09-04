// src/hooks/useCountUp.js
import { useEffect, useState } from "react";

export default function useCountUp(target, isActive, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isActive, target, duration]);

  return value;
}
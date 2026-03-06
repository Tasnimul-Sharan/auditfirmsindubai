import { useEffect, useRef, useState } from "react";


export default function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(percentage * end));

      if (percentage < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [start, end, duration]);

  return (
    <div ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}
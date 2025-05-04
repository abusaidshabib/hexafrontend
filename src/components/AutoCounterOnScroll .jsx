import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const AutoCounterOnScroll = ({ end = 100, duration = 3 }) => {
  const [inView, setInView] = useState(false);
  const countRef = useRef(null);

  // Setup Intersection Observer to detect when the element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInView(true); // Start count when the card is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <div ref={countRef} className="text-3xl font-bol">
      {inView ? (
        <CountUp start={0} end={end} duration={duration} />
      ) : (
        <span>{0}</span> // Show 0 until it's in view
      )}
    </div>
  );
};

export default AutoCounterOnScroll;

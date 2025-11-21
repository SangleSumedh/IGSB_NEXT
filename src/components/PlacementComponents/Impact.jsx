"use client";

import { useState, useEffect, useRef } from "react";

export default function Impact() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [animated, setAnimated] = useState([false, false, false, false]);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate the numbers with staggered entrance
  useEffect(() => {
    if (isVisible) {
      const targets = [27, 8.16, 350, 100];
      const duration = 2000;
      const intervalTime = 30;

      // Stagger the animations for each card
      targets.forEach((target, i) => {
        setTimeout(() => {
          // Trigger slide-in animation for this card
          setAnimated(prev => {
            const updated = [...prev];
            updated[i] = true;
            return updated;
          });

          // Start counting animation
          let start = 0;
          const increment = target / (duration / intervalTime);

          const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
              start = target;
              clearInterval(interval);
            }
            setCounts((prev) => {
              const updated = [...prev];
              updated[i] = parseFloat(start.toFixed(2));
              return updated;
            });
          }, intervalTime);
        }, i * 300); // 300ms delay between each card
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12">
          Our Impact in Numbers
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Highest Package - Slides from left */}
          <div className={`
            bg-white shadow-lg border border-blue-100 p-8 rounded-xl 
            transition-all duration-700 transform
            ${animated[0] 
              ? 'translate-x-0 opacity-100 scale-100' 
              : '-translate-x-20 opacity-0 scale-90'
            }
            hover:scale-105 hover:shadow-xl
          `}>
            <h3 className="text-4xl font-bold text-secondary mb-2">
              ₹{counts[0].toFixed(0)} LPA
            </h3>
            <p className="text-lg font-semibold text-primary mb-2">
              Highest Package
            </p>
          </div>

          {/* Average Package - Slides from top */}
          <div className={`
            bg-white shadow-lg border border-blue-100 p-8 rounded-xl 
            transition-all duration-700 transform
            ${animated[1] 
              ? 'translate-y-0 opacity-100 scale-100' 
              : '-translate-y-20 opacity-0 scale-90'
            }
            hover:scale-105 hover:shadow-xl
          `}>
            <h3 className="text-4xl font-bold text-secondary mb-2">
              ₹{counts[1].toFixed(2)} LPA
            </h3>
            <p className="text-lg font-semibold text-primary mb-2">
              Average Package
            </p>
          </div>

          {/* Companies - Slides from bottom */}
          <div className={`
            bg-white shadow-lg border border-blue-100 p-8 rounded-xl 
            transition-all duration-700 transform
            ${animated[2] 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-20 opacity-0 scale-90'
            }
            hover:scale-105 hover:shadow-xl
          `}>
            <h3 className="text-4xl font-bold text-secondary mb-2">
              {Math.floor(counts[2])}+
            </h3>
            <p className="text-lg font-semibold text-primary mb-2">
              Recruiting Companies
            </p>
          </div>

          {/* Placement Assistance - Slides from right */}
          <div className={`
            bg-white shadow-lg border border-blue-100 p-8 rounded-xl 
            transition-all duration-700 transform
            ${animated[3] 
              ? 'translate-x-0 opacity-100 scale-100' 
              : 'translate-x-20 opacity-0 scale-90'
            }
            hover:scale-105 hover:shadow-xl
          `}>
            <h3 className="text-4xl font-bold text-secondary mb-2">
              {Math.floor(counts[3])}%
            </h3>
            <p className="text-lg font-semibold text-primary mb-2">
              Placement Assistance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
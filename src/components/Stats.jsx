import { useState, useEffect, useRef } from "react";


function Counter({ end, suffix = "" }) {
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
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = end / 80;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <span
      ref={ref}
      className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-black"
    >
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-14">
          Turn Your Passion Into a Profitable Makeup Business
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 text-center">
          
          <div>
            <Counter end={120} suffix="K+" />
            <p className="mt-2 md:mt-3 text-sm sm:text-base text-gray-600 font-medium">
              Students Trained
            </p>
          </div>

          <div>
            <Counter end={15} suffix="+" />
            <p className="mt-2 md:mt-3 text-sm sm:text-base text-gray-600 font-medium">
              Years in Business
            </p>
          </div>

          <div>
            <Counter end={97} suffix="%" />
            <p className="mt-2 md:mt-3 text-sm sm:text-base text-gray-600 font-medium">
              Success Rate
            </p>
          </div>

          <div>
            <Counter end={5000} suffix="+" />
            <p className="mt-2 md:mt-3 text-sm sm:text-base text-gray-600 font-medium">
              Certified Artists
            </p>
          </div>

          <div>
            <Counter end={50} suffix="+" />
            <p className="mt-2 md:mt-3 text-sm sm:text-base text-gray-600 font-medium">
              Expert Trainers
            </p>
          </div>

          <div>
            <Counter end={100} suffix="%" />
            <p className="mt-2 md:mt-3 text-sm sm:text-base text-gray-600 font-medium">
              Practical Training
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

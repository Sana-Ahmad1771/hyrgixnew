"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import data from "../../components/data/data.json";

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

/**
 * A small internal helper to handle the count-up logic for each card
 */
const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const target = parseInt(value.replace(/[^0-9]/g, ""));
      if (isNaN(target)) {
        setCount(value);
        return;
      }
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const suffix = value.replace(/[0-9]/g, "");

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default function Success() {
  const successData = data.success;

  return (
    <section className="bg-neutral-50 py-20 lg:py-28 overflow-hidden">
      <div className="px-5 sm:px-10 md:px-20 lg:px-32">
        <motion.div
          className="flex flex-col gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <div className="flex flex-col gap-4 text-center">
            <motion.h4
              variants={fadeUp}
              className="text-black text-center font-aeonik text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-snug "
            >
              Measuring our Success <br className="hidden md:block" /> with Key
              Metrics
            </motion.h4>
          </div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
            {successData.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                whileHover={{ scale: 1.03, y: -10 }}
                className="flex flex-col items-center justify-center gap-4 py-10 px-6 bg-[#FCECDC] hover:bg-[#FFE4CF] rounded-[40px] transition-all duration-500 h-60 shadow-sm hover:shadow-xl border border-transparent hover:border-primary/10"
              >
                <div className="font-aeonik font-bold text-5xl lg:text-6xl text-black tracking-tighter">
                  <AnimatedNumber value={item.avg} />
                </div>
                <p className="font-poppins font-medium text-gray-700 text-sm lg:text-base text-center max-w-[400px] leading-snug">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Button from "./FeaturesButon";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Journey() {
  return (
    <section className="bg-secondary-light">
      <motion.div
        className="mt-30 py-10 sm:py-20 sm:mx-10 md:mx-20 lg:mx-32 mx-5 gap-10 sm:gap-15 flex flex-col-reverse md:flex-row items-center md:gap-10 lg:gap-30"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Image */}
        <motion.img
          src="/Journey.png"
          alt="Healthcare journey illustration showing 5 simple steps"
          className="lg:w-100 w-87.5 h-auto object-contain"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Content */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-5"
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <Button />
          </motion.div>

          <motion.h4
            className="text-black font-aeonik text-2xl md:text-3xl lg:text-4xl font-normal leading-snug"
            variants={fadeUp}
          >
            Deploy Hygrix hygiene <br />
            in 5 simple steps
          </motion.h4>

          <motion.span
            className="text-black font-poppins text-sm sm:text-base md:text-md lg:text-lg"
            variants={fadeUp}
          >
            Scope your sites, select SKUs, ship, train staff, and monitor
            compliance with our team alongside you.
          </motion.span>

          {/* --- FIXED EXPANDING BUTTON --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            whileHover="hover" // Only trigger hover states on mouse enter
            className="relative inline-block"
          >
            <Link
              href="/#products"
              className="relative flex items-center bg-white h-[50px] pl-[6px] pr-8 rounded-full overflow-hidden shadow-md border border-black/5"
            >
              {/* The Orange Circle */}
              <motion.div
                className="absolute left-[6px] h-[40px] bg-primary rounded-full z-0"
                initial={{ width: 40 }} // Set the specific starting width here
                variants={{
                  hover: { width: "calc(100% - 12px)" },
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              />

              {/* Icon container with sliding arrows */}
              <div className="relative z-10 w-[40px] h-[40px] flex items-center justify-center overflow-hidden">
                <motion.div
                  initial={{ x: 0 }}
                  variants={{
                    hover: { x: 40 },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.div>

                <motion.div
                  className="absolute"
                  initial={{ x: -40 }}
                  variants={{
                    hover: { x: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.div>
              </div>

              {/* Text container */}
              <div className="relative z-10 ml-3 h-[20px] overflow-hidden">
                <motion.div
                  className="flex flex-col"
                  initial={{ y: 0 }}
                  variants={{
                    hover: { y: -20 },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <span className="h-[20px] flex items-center text-black text-sm font-bold">
                    Plan my rollout
                  </span>
                  <span className="h-[20px] flex items-center text-white text-sm font-bold">
                    Plan my rollout
                  </span>
                </motion.div>
              </div>
            </Link>
          </motion.div>
          <motion.div
            className="flex items-center justify-center w-32 sm:w-34 md:w-36 h-10 sm:h-10.5 md:h-11 rounded-full bg-black shadow-[-13px_22px_12.8px_0_rgba(255,255,255,0.25)] cursor-pointer hover:bg-gray-900 transition-all duration-300"
            variants={fadeUp}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white font-medium text-xs sm:text-sm md:text-base transition-all duration-300">
              Plan my rollout
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client"

import { motion } from "motion/react"
import Button from "../home/FeaturesButon"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function Who() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="px-5 sm:px-10 md:px-20 lg:px-32 py-10 sm:py-14 md:py-16 lg:py-20 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-20 xl:gap-32 items-start"
    >
      {/* Left Side */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-full md:w-auto md:shrink-0"
      >
        <Button />
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-[#171717] font-aeonik text-2xl sm:text-3xl md:text-4xl font-normal"
        >
        Who we are
        </motion.h3>
      </motion.div>

      {/* Right Side */}
      <motion.div
        variants={fadeUp}
        className="w-full md:flex-1 md:mt-10 lg:mt-12"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed md:leading-loose"
        >
          Hygrix is a UAE-born hygiene brand dedicated to preventing infections wherever people gather. Our formulations are engineered for hospitals, clinics, schools, offices, hospitality, and industrial sites that need reliable, high-volume protection.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed md:leading-loose mt-3 sm:mt-4"
        >
          We combine hospital-grade efficacy with people-first design: quick-dry sprays, durable wipes, ergonomic dispensers, and skin-friendly sanitizers that staff and visitors actually want to use. Every SKU ships with clear usage guidance and safety documentation.
          <span className="text-gray-400">
            Manufacturing and QA are handled locally for shorter lead times, consistent batches, and responsive support across the GCC.
          </span>
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed md:leading-loose mt-3 sm:mt-4"
        >
          From single-site orders to national rollouts, Hygrix helps teams standardize hygiene with dependable supply, training resources, and consultative support.
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

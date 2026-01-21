"use client"

import Button from "./FeaturesButon"
import { motion } from "motion/react"

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Journey() {
  return (
    <section className="bg-[#FFF8F2]">
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
            className="text-[#171717] font-aeonik text-2xl md:text-3xl lg:text-4xl font-normal leading-snug"
            variants={fadeUp}
          >
            Your Journey <br /> Starts in 5 Simple Steps
          </motion.h4>

          <motion.span 
            className="text-[#171717] font-poppins text-sm sm:text-base md:text-md lg:text-lg"
            variants={fadeUp}
          >
            We remove the stress and guesswork from healthcare.
          </motion.span>

          <motion.div 
            className="flex items-center justify-center w-28 sm:w-30 md:w-32 h-10 sm:h-10.5 md:h-11 rounded-full bg-black shadow-[-13px_22px_12.8px_0_rgba(255,255,255,0.25)] cursor-pointer hover:bg-gray-900 transition-all duration-300"
            variants={fadeUp}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white font-medium text-xs sm:text-sm md:text-base transition-all duration-300">
              Get Started
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

"use client"

import { motion } from "motion/react"
import Button from "../home/FeaturesButon"

export default function RedefineHealthCare() {
  return (
    <section className="px-5 sm:px-10 md:px-20 lg:px-32 py-10 sm:py-14 md:py-16 lg:py-20 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-20 xl:gap-32 items-start">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-full md:w-auto md:shrink-0"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <Button />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#171717] font-aeonik text-2xl sm:text-3xl md:text-4xl font-normal"
        >
          Redefining Healthcare <br />
          Clearer, Kinder, <br />
          Smarter
        </motion.h3>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full md:flex-1 md:mt-10 lg:mt-12"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed md:leading-loose"
        >
          Hygrix is the infection-control partner for hospitals, clinics, schools, and workplaces that refuse to compromise on safety. Every formulation is built with hospital-grade efficacy, dermatologically considerate ingredients, and packaging designed for busy teams.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed md:leading-loose mt-3 sm:mt-4"
        >
          From quick-dry IPA sprays to touchless dispensers and nitrile gloves, our portfolio covers every hygiene checkpoint. We blend regulatory compliance, human-centered design, and dependable supply so you can protect staff, patients, and visitors without friction.
          <span className="text-gray-400">
            Manufactured in the UAE with rigorous QA, Hygrix products ship with clear usage guides, safety data, and training support for your team.
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed md:leading-loose mt-3 sm:mt-4"
        >
          Whether you are rolling out hygiene stations across a hospital network or stocking a single facility, Hygrix keeps procurement simple: consistent stock, straightforward SKUs, and responsive local support.
        </motion.p>
      </motion.div>
    </section>
  )
}

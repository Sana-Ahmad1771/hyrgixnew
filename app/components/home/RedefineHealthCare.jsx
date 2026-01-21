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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore saepe,
          nulla dicta Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos excepturi doloribus architecto aliquam culpa aut beatae. Quos molestiae iusto repellendus. exercitationem autem id sunt? Ipsa dolore quam atque.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed md:leading-loose mt-3 sm:mt-4"
        >
          Natus doloremque labore nulla accusamus iusto, dicta odit a odio nostrum pariatur eaque quos.
          <span className="text-gray-400">
            Illum iusto quaerat maiores vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, illo. A quia illum quos veritatis repudiandae.
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed md:leading-loose mt-3 sm:mt-4"
        >
          Deserunt aspernatur aliquam officia harum culpa quae tempora, labore sapiente,
          ipsa sequi incidunt laboriosam aut animi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, officia! eaque inventore asperiores.
        </motion.p>
      </motion.div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { motion } from "motion/react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

export default function Banner() {
  return (
    <section className="relative bg-white overflow-hidden rounded-2xl sm:rounded-3xl">

      {/* Top wave background */}
      <div className="absolute top-0 left-0 w-full h-17.5 sm:h-20 md:h-20 lg:h-25 z-0">
        <Image
          src="/bannerbg2.png"
          alt="banner background"
          fill
          className=""
        />
      </div>


      {/* Main content */}
      <div className="relative flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-28 mx-4 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-32 ">
        <motion.div
          className="flex flex-col items-center text-center gap-4 sm:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
          <motion.h2
            className="text-[#171717] font-aeonik text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-snug max-w-4xl"
            variants={fadeUp} >
            Healthcare, Simplified <br className="hidden sm:block" />
            You Can Focus on Living.
          </motion.h2>

          <motion.p
            className="text-[#171717] font-poppins text-sm sm:text-base md:text-lg lg:text-lg font-normal leading-relaxed max-w-3xl"
            variants={fadeUp}
          >
            We remove the stress and guesswork from healthcare, so you always feel
            informed, supported, and in control.
          </motion.p>

          <motion.div
            className="mt-3 flex items-center justify-center w-30 sm:w-32 h-10 sm:h-11 rounded-full bg-black cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-white text-sm font-medium">
              View More
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Right floating image */}
      <motion.img
        src="/bannerbg.png"
          alt="Healthcare illustration with medical elements"
        className="absolute -right-16 sm:-right-10 md:right-20 bottom-6 sm:bottom-10 w-40 sm:w-50 md:w-56 lg:w-64 h-auto"
        initial={{ y: 0 }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  )
}

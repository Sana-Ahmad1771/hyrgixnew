"use client"

import { motion } from "motion/react"

export default function Button() {
  return (
    <motion.div
      className="bg-[#DCDCDC] gap-1.5 p-2 w-30 rounded-4xl flex items-center justify-center cursor-pointer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="w-1.5 h-1.5 bg-[#F37303] rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      />

      <span className="text-[#171717] text-center font-poppins text-base font-normal">
        Features
      </span>
    </motion.div>
  )
}

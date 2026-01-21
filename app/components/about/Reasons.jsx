"use client"
import Image from "next/image"
import { motion } from "motion/react"

export default function ReasonsCard({id, text, point}) {
    return(
        <motion.div 
            className="flex items-start gap-4 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            whileHover={{ x: 5 }}
        >
            <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.4 }}
            >
<div className="w-4 h-4 relative shrink-0">
  <Image
    src="/correct.png"
    alt="Benefit checkmark"
    fill
    className="object-contain"
  />
</div>
            </motion.div>
            <p className="lg:w-87.5 font-light text-xs leading-none tracking-normal">
                <span className="font-semibold text-xs leading-none tracking-normal">{point}</span>{text}
            </p>
        </motion.div>
    )
}
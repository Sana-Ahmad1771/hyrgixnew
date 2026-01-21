"use client"
import { motion } from "motion/react"

export default function SuccessCard({avg, id, description}) {
    return(
        <motion.div 
            className="flex flex-col gap-5 py-12 px-5 bg-[#FCECDC] hover:bg-[#FFE4CF] rounded-4xl transition-colors h-50"
            whileHover={{ scale: 1.03, y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <motion.span 
                className="font-aeonik font-normal text-4xl leading-none tracking-normal text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {avg}
            </motion.span>
            <p className="font-poppins font-normal text-sm leading-none tracking-normal text-center">{description}</p>
        </motion.div>
    )
}
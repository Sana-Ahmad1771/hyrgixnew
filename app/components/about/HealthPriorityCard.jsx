"use client"
import Image from "next/image"
import { motion } from "motion/react"

export default function HealthCard({id, image, title, description}) {
    return(
        <motion.div 
            className="rounded-4xl flex flex-col bg-white p-7 justify-center items-center gap-4 h-60"
            whileHover={{ scale: 1.01, y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <motion.div 
                className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FFF8F2]"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
            >
                <Image src={image} alt={title} width={29} height={29} />
            </motion.div>
            <h5 className="font-aeonik font-normal text-xl leading-snug tracking-normal">{title}</h5>
            <p className="font-poppins font-normal text-xs leading-tight tracking-tight">{description}</p>
        </motion.div>
    )
}
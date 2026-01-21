"use client"
import Image from "next/image"
import { motion } from "motion/react"

export default function Card({id, name, des, image, contact}){
    return(
        <motion.div 
            className="bg-[#FCECDC] flex flex-col lg:h-50 justify-between gap-6 p-5 rounded-2xl hover:bg-[#FFE4CF] transition-colors cursor-pointer"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ 
                scale: 1.03, 
                y: -8,
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.div 
                className="flex gap-3 items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                >
                    <Image 
                        src={image} 
                        alt={name} 
                        width={48} 
                        height={48} 
                        className="w-6 h-6 object-contain"
                        unoptimized
                    />
                </motion.div>
                <span className="font-aeonik font-normal text-2xl leading-none tracking-normal">{name}</span>
            </motion.div>
            <motion.p 
                className="font-poppins font-normal text-xs leading-normal tracking-normal mt-4 w-50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                {des}
            </motion.p>
            <motion.span 
                className="font-poppins font-normal text-xs leading-none tracking-normal"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                {contact}
            </motion.span>
        </motion.div>
    )
}
"use client"
import { motion } from "motion/react"

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    },
}

export default function ProductsHeader({ totalProducts, selectedCategory }) {
    return (
        <motion.div 
            className="mb-8"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
        >
            <div className="flex flex-col gap-2">
                <h1 className="text-[#171717] font-aeonik text-3xl sm:text-4xl md:text-5xl font-normal">
                    Our Products
                </h1>
                <p className="text-[#5A5A5A] font-poppins text-sm sm:text-base">
                    {selectedCategory === "All Products" 
                        ? `Showing all ${totalProducts} products` 
                        : `Showing ${totalProducts} products in ${selectedCategory}`
                    }
                </p>
            </div>
        </motion.div>
    )
}

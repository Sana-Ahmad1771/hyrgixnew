"use client"
import { motion } from "motion/react"

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
    return (
        <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            {categories.map((category, index) => {
                const isSelected = selectedCategory === category

                return (
                    <motion.button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-poppins text-sm font-medium transition-all duration-300 overflow-hidden ${
                            isSelected
                                ? 'text-white shadow-lg shadow-[#F37303]/25'
                                : 'text-[#5A5A5A] bg-white border border-[#E1E1E1] hover:border-[#F37303] hover:text-[#F37303]'
                        }`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Animated Background for Selected */}
                        <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-[#F37303] to-[#FF9A4D]"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ 
                                scale: isSelected ? 1 : 0, 
                                opacity: isSelected ? 1 : 0 
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                        
                        {/* Text */}
                        <span className="relative z-10">{category}</span>

                        {/* Hover Glow Effect */}
                        {isSelected && (
                            <motion.span
                                className="absolute inset-0 bg-white/20"
                                initial={{ x: '-100%' }}
                                animate={{ x: '100%' }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            />
                        )}
                    </motion.button>
                )
            })}
        </motion.div>
    )
}

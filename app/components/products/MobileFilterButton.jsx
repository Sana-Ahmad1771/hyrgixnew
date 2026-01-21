"use client"
import { motion } from "motion/react"

export default function MobileFilterButton({ onClick, isOpen }) {
    return (
        <motion.button
            onClick={onClick}
            className="lg:hidden fixed bottom-6 right-6 z-30 flex items-center gap-2 px-5 py-3 bg-[#F37303] text-white rounded-full shadow-lg hover:bg-[#E06600] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <svg 
                className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" 
                />
            </svg>
            <span className="font-poppins text-sm font-medium">
                {isOpen ? 'Close' : 'Filters'}
            </span>
        </motion.button>
    )
}

"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"

const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

export default function CatalogProductCard({ product }) {
    const { id, slug, image, name, quantity, shortDescription, category } = product

    return (
        <Link href={`/products/${slug}`}>
            <motion.div 
                className="bg-[#FBFBFB] p-4 sm:p-5 flex flex-col gap-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-full border border-transparent hover:border-[#F37303]/20"
                variants={cardVariant}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
            >
                {/* Category Badge */}
                <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-[#F37303] bg-[#FFF5EB] px-3 py-1 rounded-full">
                        {category}
                    </span>
                </div>

                {/* Image Container */}
                <div className="bg-white p-4 relative flex justify-center items-center h-36 sm:h-40 md:h-44 w-full rounded-lg overflow-hidden">
                    <div className="relative">
                        {/* First Image */}
                        <Image 
                            src={image} 
                            alt={name} 
                            width={120}
                            height={120}
                            className="h-24 sm:h-28 md:h-32 object-contain relative z-0" 
                        />
                        {/* Second Image overlapping */}
                        <Image 
                            src={image} 
                            alt={name} 
                            width={120} 
                            height={120} 
                            className="h-24 sm:h-28 md:h-32 object-contain absolute top-2 left-5 z-10" 
                        />
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-2 flex-grow">
                    <h6 className="text-[#222823] font-aeonik text-sm sm:text-base font-medium leading-tight capitalize line-clamp-2">
                        {name}
                    </h6>
                    <p className="text-[#5A5A5A] font-poppins text-xs font-normal leading-relaxed line-clamp-2">
                        {shortDescription}
                    </p>
                    <span className="text-[#888] font-poppins text-xs font-normal capitalize mt-auto">
                        {quantity}
                    </span>
                </div>

                {/* View Details Link */}
                <div className="flex items-center gap-2 text-[#2181D5] group">
                    <span className="font-aeonik text-xs sm:text-sm font-medium capitalize group-hover:underline">
                        View Details
                    </span>
                    <svg 
                        className="w-3 h-3 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </motion.div>
        </Link>
    )
}

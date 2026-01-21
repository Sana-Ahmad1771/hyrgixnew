"use client"
import Image from "next/image"
import Link from "next/link";
import { motion } from "motion/react"
const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}
export default function ProductCard({ id, image, name, quantity }) {
    return (
        <Link href={`/products/${id}`}>
            <motion.div className="bg-[#FBFBFB] p-5 flex flex-col gap-5 rounded-lg shadow-sm cursor-pointer"
            variants={cardVariant}
            whileHover={{scale:1.05}}
            >

            {/* Image Container */}
            <div className="bg-white p-3 relative flex justify-center items-center h-40 sm:h-44 md:h-48 w-full">
                <div className="relative">
                    {/* First Image */}
                    <Image 
                        src={image} 
                        alt={name} 
                        width={144}
                        height={144}
                        className="h-28 sm:h-32 md:h-36 object-contain relative z-0" 
                    />
                    {/* Second Image overlapping - adjusted positioning for better centering */}
                    <Image src={image} alt={name} width={144} height={144} className="h-28 sm:h-32 md:h-36 object-contain absolute top-2 left-6 lg:left-4.5 z-10" />
                </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-2">
                <h6 className="text-[#222823] font-aeonik text-sm sm:text-base md:text-base font-normal leading-normal capitalize">{name}</h6>
                <span className="text-[#5A5A5A] font-poppins text-xs sm:text-xs md:text-xs font-normal leading-normal capitalize">{quantity}</span>
                <div className="flex gap-2 underline items-center text-[#2181D5]">
                    <span className="text-[#2181D5] font-aeonik text-xs sm:text-xs md:text-sm font-normal leading-normal capitalize">View Details</span>
                    <Image src="/Arrow.png" alt="View product details" width={14} height={8} className="w-2.5 sm:w-3 md:w-3.5 h-2" />
                </div>
            </div>
        </motion.div>
        </Link>
    );
}

"use client"
import Image from "next/image"
import { motion } from "motion/react"
const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}
const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
}
export default function ReviewsCard({ id, description, image, name, post }) {
    return (
        <motion.section
            variants={cardVariant}
            whileHover={{ scale: 1.05 }}>
            <div className="flex flex-col gap-5 bg-white p-4">

                <p className="text-[#1C1C1C] font-poppins text-[14px] font-normal leading-[159.983%]">{description}</p>

                <div className="flex gap-1">
                    {[...Array(4)].map((_, index) => (
                        <Image key={index} src="/greenstar.png" alt="star" width={20} height={20} />
                    ))}
                    <Image src="/whitestar.png" alt="Customer rating star" width={20} height={20} />
                </div>

                <motion.div
                    variants={fadeUp}                 // fade-up on scroll
                    whileHover={{ y: -5, scale: 1.05 }}  // hover effect: lift + slight scale
                    transition={{ type:"tween" }}  // smooth spring motion
                    className="w-[60px] h-[60px] rounded-full object-cover border-2 border-gray-200 relative overflow-hidden"
                >
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <div className="flex flex-col">
                    <span className="text-[#1C1C1C] font-poppins text-[18px] font-medium leading-[1.6]">{name}</span>
                    <span className="text-[#1C1C1C] font-poppins text-[14px] font-normal leading-[1.6]">{post}</span>

                </div>
            </div>
        </motion.section>
    )
}
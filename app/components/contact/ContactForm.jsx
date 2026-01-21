"use client"
import Image from "next/image"
import Navbar from "../common/Navbar"
import { motion } from "motion/react"

const fadeUp = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
}


export default function Hero() {
    return (
        <>
            {/* Hero Section - 100vh with centered text */}
            <section className="bg-[#FCF2E5] min-h-screen relative overflow-hidden">
                <Navbar />
                
                {/* Decorative orange circles */}
                <motion.div 
                    className="absolute bottom-50 md:bottom-30 lg:bottom-50 left-10 md:left-40"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        animate={{ 
                            y: [0, -15, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}>
                        <Image src="/herobg.png" alt="Decoration" width={150} height={150} className="w-25 md:w-37.5 object-contain" />
                    </motion.div>
                </motion.div>

                {/* Center Content - Text in middle of viewport */}
                <motion.div 
                    className="flex items-center justify-center h-[calc(100vh-350px)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <motion.h1 
                        className="text-[#171717] text-center font-Aeonik text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal px-4 leading-tight"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        Healthcare, Simplified <br /> You Can Focus on Living.
                    </motion.h1>
                </motion.div>
            </section>

            {/* Contact Form Section */}
            <div className="max-w-full sm:mx-10 md:mx-20 lg:mx-32 mx-5 -mt-57.5 md:-mt-50 lg:-mt-62.5 px-0 flex flex-col relative z-10">
                <motion.div 
                    className="bg-white rounded-2xl p-6 md:p-10 flex flex-col gap-10 lg:gap-0 lg:flex-row items-start justify-between shadow-lg border border-[#d5eee2]"
                    initial={{ opacity: 0, y: 80, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {/* Left: Form */}
                    <motion.div 
                        className="p-2 w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <motion.h2 
                            className="font-aeonik font-normal text-3xl md:text-4xl leading-none tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Contact Us
                        </motion.h2>
                        <motion.p 
                            className="font-aeonik font-normal text-sm md:text-base leading-relaxed mt-4 text-gray-500 max-w-md "
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Not sure what you need? The team at Square Events will be happy to listen to you and suggest event ideas you hadn't considered.
                        </motion.p>

                        <motion.form 
                            className="mt-10 space-y-6"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <motion.div className="flex flex-col gap-1" variants={fadeUp}>
                                <label className="font-poppins font-medium text-sm text-gray-800">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition-colors placeholder:text-gray-300 bg-transparent" />
                            </motion.div>

                            <motion.div className="flex flex-col gap-1" variants={fadeUp}>
                                <label className="font-poppins font-medium text-sm text-gray-800">Company Name</label>
                                <input type="text" placeholder="Enter your company name" className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition-colors placeholder:text-gray-300 bg-transparent" />
                            </motion.div>

                            <motion.div className="flex flex-col gap-1" variants={fadeUp}>
                                <label className="font-poppins font-medium text-sm text-gray-800">Email</label>
                                <input type="email" placeholder="Enter your email" className="w-full border-b border-gray-300 focus:border-black outline-none py-2 transition-colors placeholder:text-gray-300 bg-transparent" />
                            </motion.div>

                            <motion.div className="flex flex-col gap-1" variants={fadeUp}>
                                <label className="font-poppins font-medium text-sm text-gray-800">Your Message</label>
                                <textarea placeholder="Enter your message" rows="1" className="w-full border-b border-gray-300 focus:border-black outline-none py-2 resize-none transition-colors placeholder:text-gray-300 bg-transparent" />
                            </motion.div>

                            <motion.div 
                                className="pt-4"
                                variants={fadeUp}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <button type="button" className="bg-black text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all">
                                    Get in Touch
                                </button>
                            </motion.div>
                        </motion.form>
                    </motion.div>

                    {/* Right: Floating Image Collage */}
                    <motion.div  
                        className="hidden lg:block relative lg:mt-25 h-125 w-100 lg:w-112.5"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {/* Top left - Doctor/Stethoscope */}
                        <motion.div
                            variants={fadeUp}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="absolute top-0 left-17"
                        >
                            <Image src="/HealthTracking2.png" width={180} height={170} className="h-42.5 w-45 rounded-xl object-cover shadow-lg" alt="Medical professional" />
                        </motion.div>

                        {/* Top right - Pills */}
                        <motion.div
                            variants={fadeUp}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="absolute top-5 right-7"
                        >
                            <Image src="/HealthTracking4.png" width={110} height={110} className="h-27.5 w-27.5 rounded-xl object-cover shadow-lg" alt="Supplements" />
                        </motion.div>

                        {/* Middle left small */}
                        <motion.div
                            variants={fadeUp}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="absolute top-60 left-15"
                        >
                            <Image src="/HealthTracking3.png" width={80} height={80} className="h-20 w-20 rounded-xl object-cover shadow-lg" alt="Consultation" />
                        </motion.div>

                        {/* Middle right - larger image */}
                        <motion.div
                            variants={fadeUp}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="absolute top-42.5 right-5"
                        >
                            <Image src="/HealthTracking4.png" width={180} height={160} className="h-40 w-45 rounded-xl object-cover shadow-lg" alt="Fitness" />
                        </motion.div>

                        {/* Bottom center */}
                        <motion.div
                            variants={fadeUp}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="absolute bottom-8 left-27.5"
                        >
                            <Image src="/HealthTracking2.png" width={140} height={140} className="w-35 h-35 rounded-xl object-cover shadow-lg" alt="Supplements" />
                        </motion.div>
                    </motion.div>

                </motion.div>
            </div>
        </>
    )
}
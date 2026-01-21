"use client"
import Link from "next/link";
import { motion } from "motion/react"

const navigation = [
    { text: "Our Products", href: "/#products" },
    { text: "Contact Us", href: "/contactus" },
    { text: "About", href: "/aboutus" },
];

export default function Footer() {
    return (
        <section
            className="bg-[rgba(252,242,229,0.5)] relative w-full bg-no-repeat bg-cover"
            style={{
                backgroundImage: "url('/footerbg2.png'), url('/footerbg.png')",
                backgroundPosition: "center top, center 100px",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundSize: "cover, cover",
            }}
        >

            <div className="flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[60vh] px-5 sm:px-10 md:px-20 lg:px-32 py-10 lg:py-0 gap-10 lg:gap-0">

                {/* Left Section */}
                <motion.div 
                    className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-10 w-full lg:w-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Link href="/" className="flex rounded-4xl items-center justify-center w-30 h-12 bg-[#F37303]">
                            <div className="px-1.5"><span className="text-white font-bold">Hygrix</span></div>
                            <div className="grid items-center p-2 grid-cols-3 bg-[#F5F5F5] h-10 w-12 rounded-r-full">
                                <span className="w-2 h-2 mt-1 bg-[#F37303] rounded-full"></span>
                                <span className="w-1 h-1 bg-[#F37303] rounded-full"></span>
                                <span className="w-1.5 h-1.5 mb-1 bg-[#F37303] rounded-full"></span>
                                <span></span> <span></span><span className="w-1 h-1 relative -top-1 left-2 bg-[#F37303] rounded-full"></span><span></span>
                                <span className="w-1.5 h-1.5 relative right-1 bg-[#F37303] rounded-full"></span><span></span><span className="w-1 h-1 ml-2 relative left-4 -top-0.5 bg-[#F37303] rounded-full"></span>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Email */}
                    <motion.span 
                        className="text-[#171717] text-center lg:text-left font-aeonik text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-normal underline lowercase"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Hello@hygrixsupport.com
                    </motion.span>

                    {/* Buttons */}
                    <motion.div 
                        className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {navigation.map((item, index) => (
                            <motion.div
                                key={item.text}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Link href={item.href}>
                                    <button className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-full border border-[#E1E1E1] bg-white text-[#262626] font-spline-sans text-sm sm:text-base font-medium transition-colors hover:bg-gray-50">
                                        {item.text}
                                    </button>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Section */}
                <motion.div 
                    className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    <motion.div 
                        className="relative flex h-55 sm:h-60 md:h-65 w-62.5 sm:w-70 md:w-75 items-center justify-center overflow-hidden rounded-3xl bg-orange-50/50"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        {/* Gradient Glow Background */}
                        <div className="absolute h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 rounded-full bg-gradient-to-br from-[#be740c] to-[#f0750a] opacity-60 blur-[60px]" />
                        {/* Content Layer */}
                        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800 text-center">Have a query?</h2>
                            <motion.button 
                                className="flex w-40 sm:w-48 md:w-56 items-center justify-between rounded-full bg-black px-4 sm:px-6 py-2 sm:py-3 text-white"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-sm sm:text-base font-light">Go</span>
                                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.button>
                        </div>
                    </motion.div>
                    <motion.span 
                        className="text-[#171717] text-center lg:text-right font-aeonik text-sm sm:text-base md:text-base font-normal leading-relaxed lowercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        KIZAD KHIA 8-18 PO. Box 133685, Abu Dhabi United Arab Emirates
                    </motion.span>
                </motion.div>
            </div>

            <hr className="mx-5 sm:mx-10 md:mx-20 lg:mx-32" />
            <motion.p 
                className="text-center py-5 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                ©2026 - Hygrix | All rights reserved
            </motion.p>
        </section>
    );
}

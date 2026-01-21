"use client"
import Image from "next/image"
import Navbar from "../common/Navbar"
import Link from "next/link"
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
        <section className="bg-[#FCF2E580] min-h-screen relative overflow-hidden ">
            <Navbar />
            {/* Center Content */}
            <motion.div className="object-cover h-[86vh] flex items-center justify-center" style={{
                backgroundImage: "url('/bg.png'), url('/bg2.png')",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundSize: "cover, cover",
            }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}>
                <div className="flex items-center justify-center min-h-[calc(10vh-120px)] md:min-h-auto px-2 sm:px-4 md:px-8 lg:mx-20 relative z-10">

                    <div className="bg-cover bg-center h-125 flex flex-col mx-10 sm:mx-18 md:mx-22 lg:mx-30 items-center justify-center w-full transition-all duration-300 -mt-15">

                        <motion.div className="relative w-full h-75 sm:h-87.5 md:h-100 lg:h-112.5 flex items-center -ml-40 sm:-ml-50 md:-ml-80 justify-center lg:mb-30 transition-all duration-300"
                            
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{  duration: 4, 
                            repeat: Infinity, 
                            ease: "easeInOut"  }}>
                                
                            <Image src="/herobg.png" alt="Healthcare" width={450} height={450} className="w-full h-full object-contain transition-all duration-300" />
                        </motion.div>

                        <motion.div className="relative w-full max-w-2xl ml-5 sm:ml-30 md:ml-30 lg:ml-30 -mt-50 sm:-mt-60 md:-mt-70 lg:-mt-115 space-y-4 flex flex-col items-center text-center transition-all duration-300"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}>

                            <motion.h1 className="text-[#171717] text-center font-Aeonik text-2xl sm:text-3xl md:text-4xl font-normal px-2 transition-all duration-300"
                                variants={fadeUp}>
                                Healthcare, Simplified <br /> You Can Focus on Living.</motion.h1>


                            <motion.p className="text-gray-700 text-xs sm:text-sm md:text-base w-75 md:w-122.5 sm:w-100 px-4 sm:px-3 md:px-0 transition-all duration-300"
                                variants={fadeUp}>
                                We remove the stress and guesswork from healthcare, so you always feel informed, supported, and in control.
                            </motion.p>

                            <motion.div className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap justify-center transition-all duration-300"
                                variants={fadeUp}>
                                <motion.div className="flex items-center justify-center w-28 sm:w-30 md:w-32 h-10 sm:h-10.5 md:h-11 rounded-full bg-black shadow-[-13px_22px_12.8px_0_rgba(255,255,255,0.25)] cursor-pointer hover:bg-gray-900 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}>
                                    <span className="text-white font-medium text-xs sm:text-xs md:text-sm transition-all duration-300">Get Started</span>
                                </motion.div>
                                <Link href="/#products" className="flex items-center justify-center rounded-[100px] border border-[#E1E1E1] bg-white w-27 sm:w-29 md:w-37 h-11 sm:h-11 md:h-11 cursor-pointer hover:bg-gray-50 transition-all duration-300">
                                    <span className="text-gray-900 font-medium text-xs sm:text-xs md:text-sm transition-all duration-300">See All Products</span>
                                </Link>
                            </motion.div>

                            <motion.div className="flex gap-3 sm:gap-3 md:gap-4 items-center pt-1 sm:pt-1 md:pt-2 justify-center transition-all duration-300"
                                variants={fadeUp}>
                                <div className="flex -space-x-2 sm:-space-x-2.5 md:-space-x-3">
                                    {["/Cus1.png", "/Cus2.png", "/Cus3.png", "/Cus4.png"].map(
                                        (img, i) => (
                                            <motion.div key={i} className="w-6.5 sm:w-8 md:w-9 h-7 sm:h-8 md:h-9 rounded-full border-2 border-white relative overflow-hidden"
                                                whileHover={{ y: -4 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <Image src={img} alt={`Satisfied customer ${i + 1}`} fill className="object-cover" />
                                            </motion.div>
                                        )
                                    )}
                                </div>
                                <div className="flex flex-col gap-0.5 sm:gap-1 transition-all duration-300">
                                    <div className="flex gap-0.5 sm:gap-1 transition-all duration-300">
                                        {[...Array(5)].map((_, i) => (
                                            <Image key={i} src="/Star.png" alt="5 star rating" width={16} height={16} className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 transition-all duration-300" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 text-xs font-medium transition-all duration-300">Trusted by 1 Million user</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>

            </motion.div>
        </section >
    )
}
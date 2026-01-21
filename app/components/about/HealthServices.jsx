"use client"
import Navbar from "../common/Navbar"
import Brands from "../common/Brands"
import { motion } from "motion/react"

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
}

export default function HealthServices() {
    return (
        <section className="bg-[#FCF2E580] h-auto relative flex flex-col" style={{
            backgroundImage: "url('/bg.png')",
            backgroundPosition: "center 140px",
            backgroundRepeat: "no-repeat, no-repeat",
                    backgroundPosition: "center, center",
                    backgroundSize: "cover, cover",}}>
            <Navbar />
            <div className=" bg-no-repeat bg-cover mt-10 ">
                <motion.div 
                    className="pt-10 sm:mx-10 md:mx-20 lg:mx-32 mx-5 flex-1 flex items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="mx-auto w-full  max-w-190 lg:max-w-440  rounded-3xl overflow-hidden h-full">
                        <div className="relative w-full h-full min-h-80 bg-center bg-cover" style={{
                            backgroundImage: "url('/aboutbg.png')",
                        }}>
                            {/* Overlay to ensure text readability */}
                            <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/20 to-transparent" />

                            {/* Content */}
                            <motion.div 
                                className="relative h-full flex items-center"
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                <div className="p-6 sm:p-10 lg:p-15 lg:mt-30 mt-20">
                                    <motion.h3 
                                        className="text-white font-aeonik text-3xl sm:text-4xl md:text-5xl font-normal leading-tight"
                                        variants={fadeUp}
                                    >
                                        Healthcare Services <br /> Tailored to Your Needs
                                    </motion.h3>
                                    <motion.p 
                                        className="mt-4 text-white font-poppins text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-xl"
                                        variants={fadeUp}
                                    >
                                        We remove the stress and guesswork from healthcare, so you always feel informed, supported, and in control.
                                    </motion.p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="mb-15 ">
                <Brands />
            </div>
        </section>
    )
}